'use client';

import dynamic from 'next/dynamic';

const SpaceBackground = dynamic(() => import('./SpaceBackground'), {
  ssr: false,
  loading: () => <div className="absolute top-0 left-0 w-full h-screen bg-[#212a32]" />
});

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full h-screen">
        <SpaceBackground />
      </div>
      <div className="relative">
        {children}
      </div>
    </main>
  );
}
