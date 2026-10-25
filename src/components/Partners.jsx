const companies = [
  "Intel",
  "AMD",
  "NVIDIA",
  "ASUS",
  "MSI",
  "GIGABYTE",
  "HP",
  "Dell",
  "Lenovo",
  "Samsung",
  "TP-Link",
  "Logitech",
];

export default function Partners() {
  // Duplicate the list for a seamless scrolling effect
  const movingCompanies = [...companies, ...companies];

  return (
    <section className="overflow-hidden border-y border-line bg-paper py-6 mt-8">
      <div className="wrap mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mut">
          Brands we work with
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-company-scroll items-center gap-12 hover:[animation-play-state:paused] sm:gap-16">
          {movingCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex h-12 shrink-0 items-center justify-center"
            >
              <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-gray-500 transition-colors hover:text-cable sm:text-2xl">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
