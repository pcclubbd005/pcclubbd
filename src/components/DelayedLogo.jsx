
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DelayedLogo() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let fadeTimer;
    let hideTimer;
    let cancelled = false;

    const finishLoading = () => {
      if (cancelled) return;

      // Keep the logo visible for another 9 seconds
      fadeTimer = setTimeout(() => {
        if (cancelled) return;
        setFading(true);

        // Wait for the opacity transition to finish
        hideTimer = setTimeout(() => {
          if (!cancelled) setVisible(false);
        }, 700);
      }, 3400);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, {
        once: true,
      });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", finishLoading);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading PC Club BD"
    >
      <div className="animate-heartbeat">
        <Image
          src="/images/pcclub_card.gif"
          alt="PC Club BD"
          width={540}
          height={380}
          priority
          unoptimized
          className="h-auto w-64 object-contain"
        />
      </div>

      {/* <style jsx>{`
        .animate-heartbeat {
          animation: heartbeat 2.4s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          8% { transform: scale(1.12); }
          16% { transform: scale(1); }
          24% { transform: scale(1.08); }
          36% { transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-heartbeat {
            animation: none;
          }
        }
      `}</style> */}
    </div>
  );
}
