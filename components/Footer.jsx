import Link from 'next/link';
import Image from 'next/image';
import logo from '@/src/assets/1.png';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Service' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
];

function SocialIcon({ icon }) {
  const paths = {
    linkedin: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 9v-5.5a3.5 3.5 0 0 0-7 0v5.5m7-5.5a3.5 3.5 0 0 1-7 0V19m7-9V9',
    instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
    twitter: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 2.1 0 4-1.2 5.2-2.9z',
    facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  };
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={paths[icon] || paths.twitter} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90 border-t border-gold/40">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="RunwayTravel Home" className="inline-flex items-center">
              <span className="bg-white rounded-md px-3 py-2">
                <Image
                  src={logo}
                  alt="RunwayTravel logo"
                  width={170}
                  height={54}
                  className="h-8 w-auto"
                />
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              Premium VIP airport concierge services designed for seamless, stress-free journeys.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a
                  href="mailto:info@runwaytravel.com"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  info@runwaytravel.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919000000000"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  +91 90000 00000
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold text-gold uppercase tracking-widest mb-4">
              Social Media
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:border-gold hover:text-gold hover:bg-white/5 transition-all"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/15 py-5">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} RunwayTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
