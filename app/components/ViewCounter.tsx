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
    // Initialize count from localStorage or default to 0
    const storedCount = localStorage.getItem('viewCount')
    const initialCount = storedCount ? parseInt(storedCount) : 0
    
    // Increment count
    const newCount = initialCount + 1
    setCount(newCount)
    
    // Store new count
    localStorage.setItem('viewCount', newCount.toString())
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
