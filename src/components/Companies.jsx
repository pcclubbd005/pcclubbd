import Image from "next/image";

const companies = [
  { name: "Cantonment Board", logo: "images/companies/dhaka_cant.jpeg" },
  { name: "Wasa", logo: "images/companies/wasa.webp" },
  { name: "Ministry of Industries", logo: "images/companies/shilpo_montro.webp" },
  { name: "UCB Bank", logo: "images/companies/ucb.png" },
  { name: "BRAC Bank", logo: "images/companies/brac.png" },
  { name: "MEMIS", logo: "images/companies/memis.jpeg" },
  { name: "ICT Devision", logo: "images/companies/ict.png" },
  { name: "FAO - Food and Agriculture Organization of the United Nations", logo: "images/companies/fao.png" },
  { name: "Ministry of Finance", logo: "images/companies/finance.png" },
  { name: "Abdul Monem Ltd", logo: "images/companies/abdul_monem.svg" },
  { name: "Link3 Technologies Ltd.", logo: "images/companies/link3.png" },
  { name: "Bangladesh Bank", logo: "images/companies/bangladesh_bank.png" },
  { name: "Nagad", logo: "images/companies/nagad.svg" },
  // Add your actual company logos here
];

export default function Companies() {
  const movingCompanies = [...companies, ...companies];

  return (
    <section className="mt-4 overflow-hidden border-y border-line bg-white py-4">
      <div className="wrap mb-4 text-center">
        <h2 className="text-lg font-bold text-ink sm:text-xl">
          Widespread Experience with Leading Players in the Market
        </h2>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-company-scroll items-center hover:[animation-play-state:paused]">
          {movingCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="mx-5 flex h-28 w-52 shrink-0 items-center justify-center sm:mx-8 sm:h-32 sm:w-64"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={240}
                height={120}
                unoptimized
                className="block h-auto max-h-24 w-auto max-w-full object-contain sm:max-h-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}