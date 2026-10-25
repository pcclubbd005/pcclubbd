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
  title: "PC Club — CCTV, servers, networking and IT support in Dhaka",
  description:
    "Supply, installation and support for CCTV, IP cameras, servers, networking, biometric attendance and access control. Laboratory Road, Dhaka.",
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
