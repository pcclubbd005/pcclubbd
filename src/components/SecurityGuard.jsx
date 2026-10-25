
'use client';

import { useEffect } from 'react';

export default function SecurityGuard() {
  useEffect(() => {
    const preventContextMenu = (e) => e.preventDefault();

    const preventShortcuts = (e) => {
      const key = e.key.toLowerCase();

      // Block common view-source and developer-tools shortcuts
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        (e.ctrlKey && key === 'u')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventShortcuts);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventShortcuts);
    };
  }, []);

  return null;
}
