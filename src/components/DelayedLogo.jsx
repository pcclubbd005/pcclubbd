
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DelayedLogo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 1000);
    const hideTimer = setTimeout(() => setVisible(false), 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <Image
        src="/images/cropped-pcclub.jpg"
        alt="PC Club BD"
        width={180}
        height={180}
        className="h-auto w-40 object-contain"
        priority
      />
    </div>
  );
}
