import "./globals.css";
import { StoreProvider } from "@/context/store";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import SecurityGuard from "@/components/SecurityGuard";


export const metadata = {
  metadataBase: new URL("https://pcclubbd.com"),

  title: {
    default: "PC Club BD | CCTV, Servers & Networking Solutions",
    template: "%s | PC Club BD",
  },

  description:
    "PC Club BD provides CCTV surveillance, Uniview IP cameras, servers, networking, access control, biometric attendance, and IT support in Bangladesh.",

  applicationName: "PC Club BD",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://pcclubbd.com/",
    siteName: "PC Club BD",
    title: "PC Club BD | IT Infrastructure & Security Solutions",
    description:
      "Explore CCTV, IP surveillance, servers, networking, and enterprise IT solutions in Bangladesh.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
          <SecurityGuard />
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
