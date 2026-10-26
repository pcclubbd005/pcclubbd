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

export default function AboutUsPage() {
  return (
    <main className="wrap min-h-screen py-12">
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-4xl"
      >
        <div className="mb-8 flex items-center gap-4">
          <Image
            src="/images/cropped-pcclub.jpg"
            alt="PC Club BD logo"
            width={120}
            height={120}
            className="h-20 w-20 shrink-0 object-contain"
          />

          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-cable">
              About our company
            </p>

            <h1
              id="about-heading"
              className="font-display text-3xl font-extrabold sm:text-4xl"
            >
              About PC Club BD
            </h1>
          </div>
        </div>

        <p className="mb-6 max-w-3xl text-lg leading-8 text-mut">
          PC Club BD provides IT infrastructure and security solutions
          for businesses, offices, shops and homes in Bangladesh. Our
          service areas include CCTV surveillance, IP cameras, servers,
          networking, access control, biometric attendance and IT support.
        </p>

        <section className="mb-8">
          <h2 className="mb-3 font-display text-2xl font-bold">
            What We Do
          </h2>

          <p className="leading-7 text-mut">
            We help customers explore IT equipment and infrastructure
            solutions for their requirements. From surveillance systems
            and networking equipment to server infrastructure and access
            control, PC Club BD focuses on practical technology solutions
            for homes and organizations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 font-display text-2xl font-bold">
            Our Solutions
          </h2>

          <ul className="list-disc space-y-2 pl-6 leading-7 text-mut">
            <li>CCTV surveillance and IP camera systems</li>
            <li>Servers and IT infrastructure</li>
            <li>Wired and wireless networking solutions</li>
            <li>Access control and biometric attendance systems</li>
            <li>IT equipment supply, installation and support</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-display text-2xl font-bold">
            Contact PC Club BD
          </h2>

          <p className="mb-4 leading-7 text-mut">
            Have a requirement for CCTV, servers, networking or other
            IT infrastructure? Contact our team to discuss your needs
            and arrange a site survey where appropriate.
          </p>

          <a
            href="/#survey"
            className="btn inline-flex min-h-11 items-center justify-center"
          >
            Contact Our Team
          </a>
        </section>
      </section>
    </main>
  );
}