'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Power Your Home With Solar Energy',
    subtitle: 'Reduce electricity bills with a customized rooftop solar solution.',
    button: 'Get Solar Installation',
    link: '/#contact',
    image:
      'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Complete Solar Inverter Solutions',
    subtitle: 'Explore reliable solar inverters, batteries and backup systems.',
    button: 'Contact Our Team',
    link: '/#contact',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85',
  },
  {
    title: 'Smart Solar Solutions for Businesses',
    subtitle: 'Plan your commercial solar investment and calculate potential savings.',
    button: 'Calculate Solar ROI',
    link: '#solar-calculator',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1800&q=85',
  },
];

export default function SolarAdSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-auto mb-10 w-full overflow-hidden rounded-2xl">
      <div className="relative h-[350px] sm:h-[420px] lg:h-[480px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index
                ? 'z-10 opacity-100'
                : 'z-0 opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            <div className="absolute inset-0 flex items-center px-8 sm:px-14 lg:px-20">
              <div className="max-w-2xl text-white">
                <span className="mb-4 inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-semibold">
                  PC CLUB BD • SOLAR SOLUTIONS
                </span>

                <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl">
                  {slide.title}
                </h2>

                <p className="mb-7 max-w-xl text-base text-gray-200 sm:text-lg">
                  {slide.subtitle}
                </p>

                <a
                  href={slide.link}
                  className="inline-block rounded-lg bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  {slide.button} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-black shadow hover:bg-white"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-black shadow hover:bg-white"
      >
        ›
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? 'w-9 bg-green-500'
                : 'w-3 bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}