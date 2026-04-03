import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import logo from '@/src/assets/1.png';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'RunwayTravel | VIP Airport Concierge & Luxury Travel Services',
  description:
    'Premium airport concierge services worldwide. Meet & Assist, Fast Track, Lounge Access, and luxury transfers.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href={logo.src} type="image/png" sizes="any" />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 min-w-0 w-full overflow-x-clip pt-[var(--navbar-h)]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
