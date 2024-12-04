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

function getDeviceDetails() {
  const screenDetails = `${window.screen.width}x${window.screen.height},${window.screen.colorDepth}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = navigator.language;
  const platform = navigator.platform;
  const userAgent = navigator.userAgent;
  const browserVersion = navigator.userAgent.match(/(firefox|msie|chrome|safari)[\/\s]?([\d.]+)/i)?.[2];
  const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
  const connectionType = navigator.connection?.effectiveType || 'Unknown';
  const referrerUrl = document.referrer;

  return {
    screen_details: screenDetails,
    timezone,
    language,
    platform,
    user_agent: userAgent,
    browser_version: browserVersion,
    device_type: deviceType,
    connection_type: connectionType,
    referrer_url: referrerUrl,
  };
}

async function logVisit() {
  const deviceDetails = getDeviceDetails();
  const deviceId = btoa(`${deviceDetails.screen_details}-${deviceDetails.timezone}-${deviceDetails.language}-${deviceDetails.platform}-${deviceDetails.user_agent}`);

  // Always log the visit
  await supabase.from('views').insert([{ user_id: deviceId, ...deviceDetails }]);
}

export default function ViewCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const updateCount = async () => {
      await logVisit();

      // Fetch the total view count
      const { count: totalViews } = await supabase
        .from('views')
        .select('*', { count: 'exact' })

      setCount(totalViews)
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
