import Image from 'next/image';

import {
  FaTruckFast,
  FaHeadset,
  FaRotateLeft,
  FaScrewdriverWrench,
} from 'react-icons/fa6';

const features = [
  {
    icon: FaTruckFast,
    title: 'Fast delivery',
    description: 'Early shipping on every order',
  },
  {
    icon: FaHeadset,
    title: 'Support 24/7',
    description: 'Online, every day',
  },
  {
    icon: FaRotateLeft,
    title: '7-day money back',
    description: 'Return guarantee',
  },
  {
    icon: FaScrewdriverWrench,
    title: 'Service comes first',
    description: 'Install, repair and upgrade',
  },
];

// Replace these examples with your actual company logos.
const companies = [
  { name: 'Company 1', logo: '/images/companies/company1.png' },
  { name: 'Company 2', logo: '/images/companies/company2.png' },
  { name: 'Company 3', logo: '/images/companies/company3.png' },
  { name: 'Company 4', logo: '/images/companies/company4.png' },
  { name: 'Company 5', logo: '/images/companies/company5.png' },
];

export default function Companies() {
  const movingCompanies = [...companies, ...companies];

  return (
    <>
      {/* Companies we have worked with */}
      <section className="border-y border-line bg-paper py-5 mt-4">
        <div className="wrap mb-6 text-center">
          <h2 className="text-lg font-bold text-ink sm:text-xl">
            Companies We’ve Worked With
          </h2>
          <p className="mt-1 text-sm text-mut">
            Trusted partnerships and collaborations
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex w-max animate-company-scroll items-center hover:[animation-play-state:paused]">
            {movingCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="mx-7 flex h-16 w-32 shrink-0 items-center justify-center sm:mx-10 sm:w-40"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={150}
                  height={64}
                  unoptimized
                  className="max-h-14 w-auto max-w-32 object-contain sm:max-w-40"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}