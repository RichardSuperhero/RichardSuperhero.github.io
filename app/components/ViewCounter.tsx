'use client'

import { useEffect, useState } from 'react'

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
    const updateCount = () => {
      const deviceId = generateDeviceId()
      const viewsKey = 'totalViews'
      const viewedDevicesKey = 'viewedDevices'
      
      // Get or initialize viewed devices set
      const viewedDevicesStr = localStorage.getItem(viewedDevicesKey)
      const viewedDevices = viewedDevicesStr ? new Set(JSON.parse(viewedDevicesStr)) : new Set()
      
      // Get current total views
      const currentViews = parseInt(localStorage.getItem(viewsKey) || '0')
      
      // Only count if this device hasn't been seen before
      if (!viewedDevices.has(deviceId)) {
        const newCount = currentViews + 1
        viewedDevices.add(deviceId)
        
        // Update storage
        localStorage.setItem(viewsKey, newCount.toString())
        localStorage.setItem(viewedDevicesKey, JSON.stringify([...viewedDevices]))
        
        setCount(newCount)
      } else {
        setCount(currentViews)
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
