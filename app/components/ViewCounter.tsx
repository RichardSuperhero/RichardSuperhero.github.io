'use client'

import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import debounce from 'lodash.debounce';

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
  const referrerUrl = document.referrer || 'Direct';

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

  try {
    console.log('Checking for existing user:', deviceId);
    const { data: existingUser } = await supabase
      .from('views')
      .select('user_id')
      .eq('user_id', deviceId)
      .single();

    if (!existingUser) {
      console.log('New user, logging visit');
      await supabase.from('views').insert([{ user_id: deviceId, ...deviceDetails }]);
      console.log('Visit logged successfully');
    } else {
      console.log('Existing user, skipping log');
    }
  } catch (error) {
    console.error('Error logging visit:', error);
  }
}

export default function ViewCounter() {
  const [count, setCount] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [uniqueViews, setUniqueViews] = useState(0);
  const [isUnique, setIsUnique] = useState(false);

  useEffect(() => {
    const logVisitAndFetchCounts = debounce(async () => {
      console.log('Logging visit and fetching counts...');
      await logVisit();

      try {
        const { count: total } = await supabase.from('views').select('*', { count: 'exact' });
        console.log('Total views:', total);
        setTotalViews(total);

        const { data, error } = await supabase.rpc('count_unique_user_ids');
        console.log('Unique views:', data);

        if (error) {
          console.error('Error fetching unique view count:', error);
        } else {
          setUniqueViews(data);
        }
      } catch (error) {
        console.error('Error fetching view counts:', error);
      }
    }, 1000);

    logVisitAndFetchCounts();

    return () => {
      logVisitAndFetchCounts.cancel();
    };
  }, []);

  useEffect(() => {
    setCount(isUnique ? uniqueViews : totalViews);
  }, [isUnique, uniqueViews, totalViews]);

  const countString = count.toString().padStart(7, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {countString.split('').map((digit, index) => (
          <DigitBox key={index} digit={digit} />
        ))}
      </div>
      <button
        className="mt-2 px-2 py-1 bg-[#c55e73] border border-[#c55e73] rounded-sm text-sm text-[#2a3640]"
        onClick={() => setIsUnique(!isUnique)}
      >
        {isUnique ? 'UNIQUE' : 'TOTAL'}
      </button>
    </div>
  );
}
