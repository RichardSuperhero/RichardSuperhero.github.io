'use client'

import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function DigitBox({ digit }: { digit: string }) {
  return (
    <div className="inline-block w-8 h-10 bg-[#2a3640] border border-[#3b4957] rounded-sm mx-[1px]">
      <span className="flex justify-center items-center h-full text-xl font-mono text-[#c55e73]">
        {digit}
      </span>
    </div>
  )
}

function generateDeviceId() {
  const screen = `${window.screen.width},${window.screen.height},${window.screen.colorDepth}`
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const language = navigator.language
  const platform = navigator.platform
  const userAgent = navigator.userAgent

  return btoa(`${screen}-${timezone}-${language}-${platform}-${userAgent}`)
}

export default function ViewCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const updateCount = async () => {
      const deviceId = generateDeviceId()

      // Check if the user has been counted
      const { data: existingUser } = await supabase
        .from('views')
        .select('user_id')
        .eq('user_id', deviceId)
        .single()

      if (!existingUser) {
        // Increment the view count
        await supabase.from('views').insert([{ user_id: deviceId }])

        // Fetch the total view count
        const { count: totalViews } = await supabase
          .from('views')
          .select('*', { count: 'exact' })

        setCount(totalViews)
      } else {
        // Fetch the total view count
        const { count: totalViews } = await supabase
          .from('views')
          .select('*', { count: 'exact' })

        setCount(totalViews)
      }
    }

    updateCount()
  }, [])

  // Convert count to 7-digit string with leading zeros
  const countString = count.toString().padStart(7, '0')

  return (
    <div className="flex justify-center">
      <div className="flex">
        {countString.split('').map((digit, index) => (
          <DigitBox key={index} digit={digit} />
        ))}
      </div>
    </div>
  )
}
