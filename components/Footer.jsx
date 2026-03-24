import Link from 'next/link';

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
    <footer className="bg-white border-t-2 border-champagneGold">
      <div className="container-custom max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-playfair text-sm font-semibold text-royalBlue uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-champagneGold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-playfair text-sm font-semibold text-royalBlue uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <a
                  href="mailto:info@runwaytravel.com"
                  className="hover:text-champagneGold transition-colors"
                >
                  info@runwaytravel.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919000000000"
                  className="hover:text-champagneGold transition-colors"
                >
                  +91 90000 00000
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-playfair text-sm font-semibold text-royalBlue uppercase tracking-wider mb-4">
              Social Media
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-skyBlue text-royalBlue hover:bg-champagneGold hover:text-white transition-colors"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-skyBlue py-6">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} RunwayTravel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
