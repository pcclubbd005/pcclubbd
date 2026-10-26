import "./globals.css";
import { StoreProvider } from "@/context/store";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import SecurityGuard from "@/components/SecurityGuard";
import DelayedLogo from '@/components/DelayedLogo';

export const metadata = {
  metadataBase: new URL("https://pcclubbd.com"),

  title: {
    default: "PC Club BD | CCTV, Servers & Networking Solutions",
    template: "%s | PC Club BD",
  },

  description:
    "PC Club BD supplies, installs and supports CCTV surveillance, IP cameras, servers, networking, access control, biometric attendance and IT infrastructure in Dhaka, Bangladesh.",

  applicationName: "PC Club BD",

  creator: "PC Club BD",
  publisher: "PC Club BD",

  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "PC Club BD",
    title: "PC Club BD | CCTV, Servers & Networking Solutions",
    description:
      "Discover CCTV surveillance, IP cameras, servers, networking, access control and IT infrastructure solutions from PC Club BD in Bangladesh.",
  },

  twitter: {
    card: "summary_large_image",
    title: "PC Club BD | CCTV, Servers & Networking Solutions",
    description:
      "CCTV surveillance, IP cameras, servers, networking and IT infrastructure solutions in Bangladesh.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <DelayedLogo />
          {/* <SecurityGuard /> */}
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CartDrawer />
          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}