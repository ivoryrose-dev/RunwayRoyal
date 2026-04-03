'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import commitmentImage from '@/src/assets/Our commitment.jpeg';
import energyIcon from '@/src/assets/energy.png';
import decideIcon from '@/src/assets/decide.png';
import dependableIcon from '@/src/assets/dependable.png';

const pillars = [
  {
    title: 'Discretion',
    text: 'Your privacy and comfort are paramount. We deliver seamless service with the utmost confidentiality.',
    href: '/services',
  },
  {
    title: 'Reliability',
    text: 'Count on us to be there when you need us. Every booking is confirmed and every detail is handled.',
    href: '/services',
  },
  {
    title: 'Efficiency',
    text: 'From fast-track immigration to timely transfers, we optimize every moment of your journey.',
    href: '/services',
  },
];

const commitmentItems = [
  { label: 'Network', text: 'Global presence at major airports worldwide.' },
  { label: '24/7', text: 'Around-the-clock support for every time zone.' },
  { label: 'Staff', text: 'Trained concierge professionals at your service.' },
  { label: 'Approach', text: 'Personalized, detail-oriented travel experience.' },
];

const teamMembers = [
  { id: '01', label: 'Team 01 Member' },
  { id: '02', label: 'Team 02 Member' },
  { id: '03', label: 'Team 03 Member' },
  { id: '04', label: 'Team 04 Member' },
];

export default function AboutPage() {
  return (
    <>
      {/* Elite Story hero */}
      <section className="min-h-[70vh] flex flex-col lg:flex-row bg-skyBlue">
        <div className="flex-1 flex items-center section-padding lg:pr-12 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-2 uppercase tracking-tight">
              Elite Story
            </h1>
            <p className="text-gold text-sm uppercase tracking-widest mb-6">
              Our Legacy in Seamless Travel
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              RunwayTravel was created to redefine the airport experience by offering seamless VIP concierge
              services to travelers around the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe every journey should begin and end with comfort and elegance. Our mission is to
              transform airport travel into a smooth, luxurious experience where every detail is handled by
              experienced professionals.
            </p>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[40vh] lg:min-h-[70vh] order-1 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200"
            alt="Elite travel"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      </section>

      {/* The Team */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-4 border-b border-gold pb-4 inline-block mx-auto block w-fit">
            The Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-skyBlue border-2 border-gold flex items-center justify-center text-gold font-playfair text-2xl font-semibold mb-4 overflow-hidden">
                  <span>{m.id}</span>
                </div>
                <p className="text-gray-700 font-medium text-sm uppercase tracking-wider">{m.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-10 text-lg font-playfair italic">
            Experience the Elite Standard.
          </p>
          <div className="text-center mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Book Your Service
            </Button>
          </div>
        </div>
      </section>

      {/* Core Value Pillars */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-4 border-b border-gold pb-4 inline-block mx-auto block w-fit">
            Core Value Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col items-center text-center group hover:border-gold transition-all"
              >
                <div className="w-16 h-16 rounded-lg bg-gold/20 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                  {(() => {
                    const initial = p.title.charAt(0).toUpperCase();
                    const iconByInitial = {
                      E: energyIcon,
                      D: decideIcon,
                      R: dependableIcon,
                    };
                    const src = iconByInitial[initial];
                    if (src) {
                      return (
                        <Image
                          src={src}
                          alt={`${p.title} icon`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      );
                    }
                    return (
                      <span className="font-playfair text-2xl font-semibold">{p.title.charAt(0)}</span>
                    );
                  })()}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">{p.title}</h3>
                <p className="text-gray-700 text-sm flex-1 mb-6">{p.text}</p>
                <Button href={p.href} variant="secondary" size="sm">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-skyBlue border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] max-h-[500px] rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={commitmentImage}
                alt="Our commitment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-8 border-b border-gold pb-4 w-fit">
                Our Commitment
              </h2>
              <ul className="space-y-6">
                {commitmentItems.map((item, i) => (
                  <li key={item.label} className="flex gap-4 items-start">
                    <span className="text-gold font-playfair text-lg font-semibold shrink-0">—</span>
                    <div>
                      <span className="font-playfair font-semibold text-primary uppercase tracking-wider">{item.label}</span>
                      <p className="text-gray-700 text-sm mt-1">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
