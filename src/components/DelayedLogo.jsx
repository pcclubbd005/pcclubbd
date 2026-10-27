"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DelayedLogo() {
  const [visible, setVisible] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    let hideTimer;

    const finishLoading = () => {
      setPageLoaded(true);
      hideTimer = setTimeout(() => setVisible(false), 9000);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-700 ${
        pageLoaded ? "opacity-0" : "opacity-100"
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
          className="h-auto w-64 object-contain"
        />
      </div>

      {/* <style jsx>{`
        .animate-heartbeat {
          animation: heartbeat 2.4s ease-in-out infinite;
          transform-origin: center;
          will-change: transform;
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          8% {
            transform: scale(1.12);
          }
          16% {
            transform: scale(1);
          }
          24% {
            transform: scale(1.08);
          }
          36% {
            transform: scale(1);
          }
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
