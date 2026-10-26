import Rack from "./Rack";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="home-heading"
      className="scroll-mt-20 py-8 sm:py-10 lg:py-14"
    >
      <div className="wrap grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-[1.1fr_.9fr] lg:gap-12">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-cable">
            PC Club · Dhaka, Bangladesh
          </p>

          <h1
            id="home-heading"
            className="max-w-2xl font-display text-[clamp(2rem,7vw,3.9rem)] font-extrabold leading-[1.08] tracking-[-.03em]"
          >
            CCTV, Servers & Networking Solutions in Dhaka
          </h1>

          <p className="mb-6 mt-4 max-w-[46ch] text-base leading-7 text-mut sm:mb-7 sm:mt-5 sm:text-lg">
            PC Club supplies, installs and supports CCTV surveillance,
            IP cameras, servers, networking, access control and IT
            infrastructure for businesses, shops and homes in Bangladesh.
          </p>

          <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a
              href="/shop"
              className="btn inline-flex min-h-11 items-center justify-center text-center hover:text-ink"
            >
              Browse equipment
            </a>

            <a
              href="#survey"
              className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-ink px-5 py-2.5 text-center font-medium transition-colors hover:bg-cable"
            >
              Book a site survey
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <Rack />
        </div>
      </div>
    </section>
  );
}