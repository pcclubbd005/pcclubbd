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
  { name: "Amber Group", logo: "images/companies/amber_group.jpeg" },
  { name: "Partex Group", logo: "images/companies/partex.png" },
  { name: "Jamuna Future Park", logo: "images/companies/jamuna.png" },
  { name: "Amber IT", logo: "images/companies/amber.jpeg" },
  { name: "Amber IT", logo: "images/companies/energy_pack.png" },
  { name: "Gazi Group", logo: "images/companies/gazi.png" },
  { name: "Lithe Group", logo: "images/companies/lithe.png" },
  { name: "Daraz", logo: "images/companies/daraz.png" },
  { name: "Jamuna Group", logo: "images/companies/jamuna_group.png" },
  { name: "ACI", logo: "images/companies/aci.webp" },
  { name: "Esquire Group", logo: "images/companies/esquire.jpeg" },
  { name: "Dada Group", logo: "images/companies/dada.webp" },
  { name: "Great Wall Ceramic Industries Ltd.", logo: "images/companies/great_wall.png" },
  { name: "Madina Group", logo: "images/companies/madina_group.jpeg" },
  { name: "ACS Textiles Ltd.", logo: "images/companies/acs.avif" },
  { name: "Comprehensive Holdings", logo: "images/companies/comprehensive.png" },
  { name: "ABM Investama", logo: "images/companies/abm.png" },
  { name: "Chaity Group", logo: "images/companies/chaity.jpeg" },
  { name: "Skyline Group", logo: "images/companies/skyline.jpeg" },
  { name: "Care Bangladesh", logo: "images/companies/care.png" },
  { name: "Save The Children", logo: "images/companies/save_the_children.png" },
  { name: "Japan Bangladesh Group", logo: "images/companies/japan_bangladesh.jpeg" },
  { name: "Japan Bangladesh Friendship Foundation", logo: "images/companies/jbff.png" },
  { name: "Arobil", logo: "images/companies/arobil.avif" },
  { name: "Bangladesh Chemical Industries and Corporation Ltd.", logo: "images/companies/bcic.webp" },
  { name: "Bangladesh Institute of Administration and Management Foundation", logo: "images/companies/biam.png" },
  { name: "Shepherd Industries Ltd.", logo: "images/companies/shepherd_industries.jpg" },
  { name: "Paragon Engineering", logo: "images/companies/paragon.png" },
  { name: "Flyhub Bangladesh", logo: "images/companies/flyhub.png" },
  { name: "Synesis IT", logo: "images/companies/synesisit.webp" },
  { name: "Montex", logo: "images/companies/montex.png" },
  { name: "Splash The Water Park", logo: "images/companies/splash.jpeg" },
  { name: "Ambala Foundation", logo: "images/companies/ambala.png" },
  { name: "National Institute of Population Research and Training", logo: "images/companies/niport.jpeg" },
  { name: "ICICI", logo: "images/companies/icici.jpg" },
  
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