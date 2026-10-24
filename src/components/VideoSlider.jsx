
'use client';

import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const videos = [
  {
    title: 'CCTV Camera Solutions',
    description: 'Explore modern CCTV cameras and security systems.',
    src: '/hello_ecomm2/videos/promo.mp4',
  },
  {
    title: 'Server & Storage',
    description: 'Discover server hardware and storage solutions.',
    src: '/hello_ecomm2/videos/promo2.mp4',
  },
  {
    title: 'Networking Solutions',
    description: 'Learn about business networks and connectivity.',
    src: '/hello_ecomm2/videos/promo3.mp4',
  },
];

export default function VideoSlider() {
  const [active, setActive] = useState(0);
  const videoRef = useRef(null);
  const video = videos[active];

  function changeVideo(index) {
    setActive((index + videos.length) % videos.length);
  }

  return (
    <section className="mx-auto mt-2 w-full px-4 py-2 md:w-[60%] md:px-0">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <video
          key={video.src}
          ref={videoRef}
          className="aspect-video w-full bg-black object-contain"
          src={video.src}
          controls
          playsInline
          preload="metadata"
        >
          Your browser does not support video playback.
        </video>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {video.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {video.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => changeVideo(active - 1)}
              className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
              aria-label="Previous video"
            >
              <FaChevronLeft />
            </button>

            <span className="text-sm text-gray-500">
              {active + 1} / {videos.length}
            </span>

            <button
              type="button"
              onClick={() => changeVideo(active + 1)}
              className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700"
              aria-label="Next video"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {videos.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => changeVideo(index)}
                aria-label={`Play ${item.title}`}
                aria-current={active === index ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  active === index
                    ? 'w-7 bg-gray-900'
                    : 'w-2.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
