"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hello_ecomm2/images/sliders/slider1.webp",
    title: "CCTV & Security Systems",
    description:
      "Smart surveillance and reliable security solutions for homes and businesses.",
  },
  {
    image: "/hello_ecomm2/images/sliders/slider8.webp",
    title: "Servers & Networking",
    description:
      "Professional server setup, structured cabling and network infrastructure.",
  },
  {
    image: "/hello_ecomm2/images/sliders/slider9.webp",
    title: "Complete IT Solutions",
    description:
      "Installation, maintenance and technical support for your business.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section id="top" className="py-5 md:py-7">
      <div className="wrap">
        <div className="mx-auto grid max-w-5xl items-center gap-5 overflow-hidden rounded-xl border border-line bg-paper shadow-sm md:grid-cols-2 md:gap-0">
          <div className="relative h-56 overflow-hidden md:h-72">
            {slides.map((item, index) => (
              <div
                key={item.image}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  active === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            ))}
          </div>
          <div className="p-5 md:p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cable">
              PC CLUB BD
            </p>

            <h1 className="font-display text-2xl font-extrabold leading-tight md:text-3xl">
              {slide.title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-mut md:text-base">
              {slide.description}
            </p>

            <div className="mt-5 flex gap-2" aria-label="Choose slide">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.title}`}
                  aria-pressed={active === index}
                  className={`h-1.5 rounded-full transition-all ${
                    active === index ? "w-8 bg-cable" : "w-3 bg-line"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
