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

export default function ViewCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const updateCount = () => {
      // Get current count
      const storedCount = localStorage.getItem('viewCount')
      const currentCount = storedCount ? parseInt(storedCount) : 0
      
      // Only update if we haven't counted this session
      const hasCountedKey = 'hasCountedView'
      const hasCounted = sessionStorage.getItem(hasCountedKey)
      
      if (!hasCounted) {
        const newCount = currentCount + 1
        localStorage.setItem('viewCount', newCount.toString())
        sessionStorage.setItem(hasCountedKey, 'true')
        setCount(newCount)
      } else {
        setCount(currentCount)
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
