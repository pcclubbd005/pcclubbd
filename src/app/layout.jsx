import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/context/store';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';
import WhatsAppButton from '@/components/WhatsAppButton';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '800'], variable: '--font-display' });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body' });

export const metadata = {
  title: 'PC Club — CCTV, servers, networking and IT support in Dhaka',
  description:
    'Supply, installation and support for CCTV, IP cameras, servers, networking, biometric attendance and access control. Laboratory Road, Dhaka.',
    icons: {
    icon: '/hello_ecomm2/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <StoreProvider>
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
