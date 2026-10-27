import Image from "next/image";

export const metadata = {
  title: "About Us",
  description:
    "Learn about PC Club BD, providing CCTV surveillance, IP cameras, servers, networking, access control and IT infrastructure solutions in Dhaka, Bangladesh.",
  alternates: {
    canonical: "/aboutus",
  },
  openGraph: {
    type: "website",
    url: "https://pcclubbd.com/aboutus",
    siteName: "PC Club BD",
    title: "About PC Club BD | IT & Security Solutions",
    description:
      "Discover PC Club BD's CCTV, server, networking and IT infrastructure solutions in Bangladesh.",
    images: [
      {
        url: "/images/cropped-pcclub.jpg",
        alt: "PC Club BD logo",
      },
    ],
  },
};

/* Company logos: files located in public/images/companies/ */

const companies = [
  { name: "Cantonment Board", logo: "images/companies/dhaka_cant.jpeg" },
  { name: "Wasa", logo: "images/companies/wasa.webp" },
  {
    name: "Ministry of Industries",
    logo: "images/companies/shilpo_montro.webp",
  },
  { name: "UCB Bank", logo: "images/companies/ucb.png" },
  { name: "BRAC Bank", logo: "images/companies/brac.png" },
  { name: "MEMIS", logo: "images/companies/memis.jpeg" },
  { name: "ICT Division", logo: "images/companies/ict.png" },
  {
    name: "FAO - Food and Agriculture Organization of the United Nations",
    logo: "images/companies/fao.png",
  },
  { name: "Ministry of Finance", logo: "images/companies/finance.png" },
  { name: "Abdul Monem Ltd", logo: "images/companies/abdul_monem.svg" },
  { name: "Link3 Technologies Ltd.", logo: "images/companies/link3.png" },
  { name: "Bangladesh Bank", logo: "images/companies/bangladesh_bank.png" },
  { name: "Nagad", logo: "images/companies/nagad.svg" },
  { name: "Amber Group", logo: "images/companies/amber_group.jpeg" },
  { name: "Partex Group", logo: "images/companies/partex.png" },
  { name: "Jamuna Future Park", logo: "images/companies/jamuna.png" },
  { name: "Amber IT", logo: "images/companies/amber.jpeg" },
  { name: "Energy Pack", logo: "images/companies/energy_pack.png" },
  { name: "Gazi Group", logo: "images/companies/gazi.png" },
  { name: "Lithe Group", logo: "images/companies/lithe.png" },
  { name: "Daraz", logo: "images/companies/daraz.png" },
  { name: "Jamuna Group", logo: "images/companies/jamuna_group.png" },
  { name: "ACI", logo: "images/companies/aci.webp" },
  { name: "Esquire Group", logo: "images/companies/esquire.jpeg" },
  { name: "Dada Group", logo: "images/companies/dada.webp" },
  {
    name: "Great Wall Ceramic Industries Ltd.",
    logo: "images/companies/great_wall.png",
  },
  { name: "Madina Group", logo: "images/companies/madina_group.jpeg" },
  { name: "ACS Textiles Ltd.", logo: "images/companies/acs.avif" },
  {
    name: "Comprehensive Holdings",
    logo: "images/companies/comprehensive.png",
  },
  { name: "ABM Investama", logo: "images/companies/abm.png" },
  { name: "Chaity Group", logo: "images/companies/chaity.jpeg" },
  { name: "Skyline Group", logo: "images/companies/skyline.jpeg" },
  { name: "Care Bangladesh", logo: "images/companies/care.png" },
  { name: "Save The Children", logo: "images/companies/save_the_children.png" },
  {
    name: "Japan Bangladesh Group",
    logo: "images/companies/japan_bangladesh.jpeg",
  },
  {
    name: "Japan Bangladesh Friendship Foundation",
    logo: "images/companies/jbff.png",
  },
  { name: "Arobil", logo: "images/companies/arobil.avif" },
  {
    name: "Bangladesh Chemical Industries and Corporation Ltd.",
    logo: "images/companies/bcic.webp",
  },
  {
    name: "Bangladesh Institute of Administration and Management Foundation",
    logo: "images/companies/biam.png",
  },
  {
    name: "Shepherd Industries Ltd.",
    logo: "images/companies/shepherd_industries.jpg",
  },
  { name: "Paragon Engineering", logo: "images/companies/paragon.png" },
  { name: "Flyhub Bangladesh", logo: "images/companies/flyhub.png" },
  { name: "Synesis IT", logo: "images/companies/synesisit.webp" },
  { name: "Montex", logo: "images/companies/montex.png" },
  { name: "Splash The Water Park", logo: "images/companies/splash.jpeg" },
  { name: "Ambala Foundation", logo: "images/companies/ambala.png" },
  {
    name: "National Institute of Population Research and Training",
    logo: "images/companies/niport.jpeg",
  },
  { name: "ICICI", logo: "images/companies/icici.jpg" },
];

function CompanyLogoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {companies.map((company) => (
        <div
          key={company.name}
          className="flex min-h-28 items-center justify-center border border-line bg-white p-4"
          title={company.name}
        >
          <div className="relative h-28 w-full">
            <Image
              src={`/${company.logo}`}
              alt={`${company.name} logo`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 20vw"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* Technology partners: files located in public/images/partners/ */
const partnerGroups = [
  {
    category: "Data Center WAN Load Balancer",
    partners: [
      { name: "Peplink", logo: "peplink.png" },
      { name: "Fortinet", logo: "fortinet.png" },
    ],
  },
  {
    category: "Data Center Security",
    partners: [
      { name: "Palo Alto Networks", logo: "palo-alto-networks.webp" },
      { name: "F5", logo: "f5.svg" },
      { name: "Fortinet", logo: "fortinet.png" },
      { name: "Trend Micro", logo: "trend-micro.png" },
    ],
  },
  {
    category: "Data Center Networking",
    partners: [{ name: "Arista", logo: "arista.svg" }],
  },
  {
    category: "Data Center Backup and Recovery",
    partners: [{ name: "HYCU", logo: "hycu.png" }],
  },
  {
    category: "Operating System",
    partners: [
      { name: "Red Hat", logo: "redhat.png" },
      { name: "Microsoft", logo: "microsoft.png" },
    ],
  },
  {
    category: "Hyperconverged Infrastructure (HCI)",
    partners: [
      { name: "Nutanix", logo: "nutanix.png" },
      { name: "OpenStack", logo: "openstack.png" },
    ],
  },
  {
    category: "Server and Storage",
    partners: [
      { name: "Hewlett Packard Enterprise", logo: "hpe.svg" },
      { name: "Supermicro", logo: "supermicro.png" },
    ],
  },
  {
    category: "Wireless Networks",
    partners: [
      { name: "Aruba", logo: "aruba.svg" },
      { name: "Fortinet", logo: "fortinet.png" },
      { name: "Arista", logo: "arista.svg" },
    ],
  },
  {
    category: "Structured Cabling",
    partners: [
      { name: "Siemon", logo: "siemon.png" },
      { name: "Rosenberger", logo: "rosenberger.png" },
    ],
  },
  {
    category: "UPS",
    partners: [{ name: "APC", logo: "apc.png" }],
  },
  {
    category: "Rack and PDU",
    partners: [
      { name: "APC", logo: "apc.png" },
      { name: "Toten", logo: "toten.png" },
    ],
  },
  {
    category: "Security and Surveillance",
    partners: [
      { name: "UNV Uniview Technologies", logo: "uniview.png" },
      { name: "ZKTeco", logo: "zkteco.png" },
    ],
  },
  {
    category: "Public Address (PA)",
    partners: [{ name: "TOA", logo: "toa.png" }],
  },
  {
    category: "IP Telephony",
    partners: [
      { name: "Fortinet", logo: "fortinet.png" },
      { name: "Yeastar", logo: "yeastar.png" },
      { name: "Fanvil", logo: "fanvil.png" },
    ],
  },
];

function LogoGrid({ items, folder }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          title={item.name}
          className="flex min-h-24 items-center justify-center border border-gray-200 bg-white p-4"
        >
          <div className="relative h-28 w-full">
            <Image
              src={`/images/${folder}/${item.logo}`}
              alt={`${item.name} logo`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 20vw"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const productCategories = [
  {
    title: "Desktop Computers, Laptops & Netbooks",
    description:
      "Branded PCs, Mini PCs, laptops, custom-built computers, gaming laptops, tablet PCs and thin clients.",
  },
  {
    title: "Computer & Laptop Accessories and Components",
    description:
      "Computer cases and coolers, power supplies, processors, motherboards, graphics cards, HDDs, SSDs, RAM, sound cards, optical drives, laptop batteries, adapters, bags, displays, docks and other accessories.",
  },
  {
    title: "Monitors, Projectors & Displays",
    description:
      "LED/LCD monitors, TVs, interactive whiteboards and accessories, projectors, presenters, ceiling mounts, projection screens and related components.",
  },
  {
    title: "Mobile Phones, Tablets & Telephony",
    description:
      "Smartphones, mobile devices, tablets, IP phones, PABX systems, multi-user telephony systems and video conferencing solutions.",
  },
  {
    title: "Printers, Scanners & Print Supplies",
    description:
      "Printers, scanners, multifunction copiers, POS printers, fax machines, plotters, barcode printers and scanners, card readers, conference systems, paper shredders and related equipment.",
  },
  {
    title: "Servers",
    description:
      "Enterprise servers, KVM switches, consoles, server accessories and I/O accelerators.",
  },
  {
    title: "Networking",
    description:
      "Routers, access points, Wi-Fi extenders, network switches, LAN cards, modems, racks, patch panels, patch cords, network interface cards, network security and wireless networking equipment.",
  },
  {
    title: "UPS & Power Backup",
    description:
      "Online and offline UPS systems, UPS batteries and power backup products.",
  },
  {
    title: "Office Equipment & Consumables",
    description:
      "Toner, cartridges, ink bottles, ribbons, refill supplies, drum units, print heads, keyboards, mice and other office essentials.",
  },
  {
    title: "Electrical & Electronic Equipment",
    description:
      "Two-way radios and accessories, audio and stereo equipment, PA systems, televisions, video kits, virtual reality equipment and accessories.",
  },
  {
    title: "Security & Surveillance",
    description:
      "CCTV cameras, IP and analogue surveillance systems, camera accessories, detectors, time attendance systems, access control, digital door locks, metal detectors and baggage X-ray scanners.",
  },
  {
    title: "Cameras & Photography Accessories",
    description:
      "Digital cameras, lenses, flashes, tripods, camera bags, cases, batteries, memory cards, professional camcorders, action cameras and accessories.",
  },
  {
    title: "Communication Cables",
    description:
      "Fiber-optic cables, UTP network cables, power cables and audio/video cables.",
  },
  {
    title: "Software",
    description:
      "Design and media software, office applications, operating systems, Microsoft products, Adobe products, NAS solutions and security software.",
  },
  {
    title: "IT Services & Technical Support",
    description:
      "Repair and maintenance for PCs, CCTV, access control systems, laptops, printers, plotters, security devices and UPS systems, plus IT project management, IP telephony and video conferencing support.",
  },
];

function ProductCategories() {
  return (
    <section
      aria-labelledby="product-categories-heading"
      className="mb-12 border-t border-gray-200 pt-10"
    >
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-cable">
          What we supply
        </p>
        <h2
          id="product-categories-heading"
          className="mb-4 font-display text-3xl font-extrabold"
        >
          Product Categories & Solutions
        </h2>
        <p className="leading-7 text-mut">
          Explore our range of IT products, business technology, security
          equipment and professional support services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((category, index) => (
          <article
            key={category.title}
            className="rounded-xl border border-line bg-white p-5 transition-colors hover:border-cable"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 font-display text-sm font-bold text-cable">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="mb-3 font-display text-lg font-bold leading-snug">
              {category.title}
            </h3>

            <p className="text-sm leading-6 text-mut">{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main className="wrap min-h-screen py-12">
      <article className="mx-auto max-w-5xl">
        {/* Company introduction */}
        <header className="mb-10">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/images/cropped-pcclub.jpg"
              alt="PC Club logo"
              width={120}
              height={120}
              className="h-20 w-20 shrink-0 object-contain"
            />

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-cable">
                About our company
              </p>
              <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
                About PC Club
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10">
            {/* Left: Company information */}
            <div>
              <header className="mb-8">
                <p className="mb-5 text-lg leading-8 text-mut">
                  PC Club provides IT infrastructure and security solutions for
                  businesses, offices, shops and homes in Bangladesh. Our
                  service areas include CCTV surveillance, IP cameras, servers,
                  networking, access control, biometric attendance and IT
                  support.
                </p>

                <p className="leading-7 text-mut">
                  We help customers explore technology products and
                  infrastructure solutions suited to their requirements. From
                  surveillance systems and networking equipment to server
                  infrastructure and access control, our focus is on practical
                  technology solutions for homes and organizations.
                </p>
              </header>
            </div>

            {/* Right: Company logo animation video */}
            <div className="md:sticky md:top-24">
              <video
                className="h-auto w-full rounded-xl border border-line object-contain"
                width="864"
                height="496"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="PC Club company logo animation"
              >
                <source src="/videos/pcclub-animation.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </header>

        {/* Services */}
        <section className="mb-12 border-t border-gray-200 pt-8">
          <h2 className="mb-4 font-display text-2xl font-bold">What We Do</h2>

          <p className="mb-5 leading-7 text-mut">
            Our solutions cover the core technology needs of modern
            organizations, including network connectivity, computing
            infrastructure, physical security and business communications.
          </p>

          <ul className="list-disc space-y-2 pl-6 leading-7 text-mut">
            <li>CCTV surveillance and IP camera systems</li>
            <li>Servers, storage and IT infrastructure</li>
            <li>Wired and wireless networking solutions</li>
            <li>Access control and biometric attendance systems</li>
            <li>Structured cabling, racks and power protection</li>
            <li>IT equipment supply, installation and support</li>
          </ul>
        </section>
        <ProductCategories />
        {/* Organizations: static grid, no animation */}
        <section className="mb-12 border-t border-line pt-8">
          <h2 className="mb-3 font-display text-2xl font-bold">
            Widespread Experience with Leading Players in the Market
          </h2>

          <p className="mb-6 leading-7 text-mut">
            Our company profile showcases organizations across public services,
            finance, telecommunications, manufacturing, technology and other
            sectors.
          </p>

          <CompanyLogoGrid />
        </section>

        {/* Technology partners, grouped by category */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="mb-3 font-display text-2xl font-bold">
            Our Partners for Technologies and Solutions
          </h2>

          <p className="mb-8 leading-7 text-mut">
            Our technology portfolio spans data center infrastructure,
            networking, cybersecurity, server and storage systems, wireless
            connectivity, surveillance and business communications. The
            following brands are organized by solution category.
          </p>

          <div className="mb-10">
            <h3 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold">
              Enterprise Solutions
            </h3>

            <div className="space-y-8">
              {partnerGroups.slice(0, 7).map((group) => (
                <section key={group.category}>
                  <h4 className="mb-3 font-semibold">{group.category}</h4>
                  <LogoGrid items={group.partners} folder="partners" />
                </section>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold">
              Other Solutions
            </h3>

            <div className="space-y-8">
              {partnerGroups.slice(7).map((group) => (
                <section key={group.category}>
                  <h4 className="mb-3 font-semibold">{group.category}</h4>
                  <LogoGrid items={group.partners} folder="partners" />
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="mb-3 font-display text-2xl font-bold">
            Contact PC Club BD
          </h2>

          <p className="mb-5 leading-7 text-mut">
            Have a requirement for CCTV, servers, networking or other IT
            infrastructure? Contact our team to discuss your needs and arrange a
            site survey where appropriate.
          </p>

          <a
            href="/#survey"
            className="btn inline-flex min-h-11 items-center justify-center"
          >
            Contact Our Team
          </a>
        </section>
      </article>
    </main>
  );
}
