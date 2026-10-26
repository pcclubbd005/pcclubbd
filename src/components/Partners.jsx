import Image from "next/image";

const partners = [
  { name: "Peplink", logo: "peplink.png" },
  { name: "Fortinet", logo: "fortinet.png" },
  { name: "Palo Alto Networks", logo: "palo-alto-networks.webp" },
  { name: "F5", logo: "f5.svg" },
  { name: "Trend Micro", logo: "trend-micro.png" },
  { name: "Arista", logo: "arista.svg" },
  { name: "HYCU", logo: "hycu.png" },
  { name: "Red Hat", logo: "redhat.png" },
  { name: "Microsoft", logo: "microsoft.png" },
  { name: "Nutanix", logo: "nutanix.png" },
  { name: "OpenStack", logo: "openstack.png" },
  { name: "Hewlett Packard Enterprise", logo: "hpe.svg" },
  { name: "Supermicro", logo: "supermicro.png" },
  { name: "Aruba", logo: "aruba.svg" },
  { name: "Siemon", logo: "siemon.png" },
  { name: "Rosenberger", logo: "rosenberger.png" },
  { name: "APC", logo: "apc.png" },
  { name: "Toten", logo: "toten.png" },
  { name: "Uniview Technologies", logo: "uniview.png" },
  { name: "ZKTeco", logo: "zkteco.png" },
  { name: "TOA", logo: "toa.png" },
  { name: "Yeastar", logo: "yeastar.png" },
  { name: "Fanvil", logo: "fanvil.png" },
];

export default function Partners() {
  const movingPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="mt-8 overflow-hidden border-y border-line bg-white py-6"
    >
      <div className="wrap mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mut">
          Our Partners for Technologies and Solutions
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-company-scroll items-center hover:[animation-play-state:paused]">
          {movingPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              title={partner.name}
              className="mx-5 flex h-28 w-52 shrink-0 items-center justify-center sm:mx-8 sm:h-32 sm:w-64"
            >
              <Image
                src={`/images/partners/${partner.logo}`}
                alt={`${partner.name} logo`}
                width={240}
                height={120}
                className="block h-auto max-h-24 w-auto max-w-full object-contain sm:max-h-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}