'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import commitmentImage from '@/src/assets/Our commitment.jpeg';
import energyIcon from '@/src/assets/energy.png';
import decideIcon from '@/src/assets/decide.png';
import dependableIcon from '@/src/assets/dependable.png';
import bhavyaPortrait from '@/src/assets/Gemini_Generated_Image_sdusbgsdusbgsdus-Photoroom.png';

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

const coreExpertise = [
  'VIP guest handling',
  'Airport operations & coordination',
  'Lounge & passenger experience',
  'Client retention & service excellence',
];

export default function AboutPage() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col lg:flex-row bg-skyBlue">
        <div className="flex-1 flex items-center section-padding py-12 sm:py-16 lg:py-20 lg:pr-16 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0 lg:ml-auto lg:mr-0"
          >
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-2 tracking-tight break-words">
              Our story
            </h1>
            <p className="text-gold text-sm uppercase tracking-widest mb-6">Airport meet &amp; greet, done right</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded in March 2020, we provide airport meet and greet services at highly competitive prices without
              compromising on quality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our focus is simple—deliver premium service that others can&apos;t match at the same price point.
            </p>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[42vh] sm:min-h-[48vh] lg:min-h-[70vh] order-1 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200"
            alt="Airport travel"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      </section>

      {/* Founder & leadership */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-none lg:mx-0 lg:sticky lg:top-[calc(var(--navbar-h)+1.5rem)] lg:self-start"
            >
              <div className="relative aspect-[3/4] max-h-[480px] lg:max-h-[540px] rounded-2xl overflow-hidden bg-black ring-1 ring-gray-200/80 shadow-xl shadow-primary/10">
                <Image
                  src={bhavyaPortrait}
                  alt="Bhavya Chhabra — VIP airport assistance and operations"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="min-w-0 flex flex-col justify-center lg:justify-start space-y-7 md:space-y-8 lg:pt-2"
            >
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary border-b border-gold pb-3 w-fit max-w-full mb-4">
                  About Bhavya Chhabra
                </h2>
                <p className="text-gray-700 leading-relaxed text-pretty max-w-prose">
                  Bhavya Chhabra specializes in VIP airport assistance, guest experience, and operational management.
                  Known for handling high-pressure airport situations, Bhavya ensures smooth, stress-free journeys for
                  every traveler.
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-lg font-semibold text-gold uppercase tracking-wider mb-3">
                  Core expertise
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-gray-700 text-sm md:text-base max-w-2xl">
                  {coreExpertise.map((line) => (
                    <li key={line} className="flex gap-2.5 items-start">
                      <span className="text-gold font-bold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span className="leading-snug">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-playfair text-lg font-semibold text-gold uppercase tracking-wider mb-3">
                  Experience &amp; recognition
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed text-pretty max-w-prose">
                  Recognized for exceptional customer service and appreciated by passengers for delivering comfort,
                  efficiency, and personalized assistance.
                </p>
              </div>

              <div className="pt-1 flex flex-wrap gap-4 items-center">
                <Button href="/contact" variant="primary" size="lg">
                  Book your service
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4 border-b border-gold pb-4 px-2 w-fit">
              Core value pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-7 md:p-8 flex h-full flex-col items-center text-center group hover:border-gold transition-all"
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
                  Learn more
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-skyBlue border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[4/5] max-h-[480px] lg:max-h-[520px] rounded-xl overflow-hidden shadow-lg shadow-primary/10"
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
              className="min-w-0 lg:pl-2"
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6 md:mb-8 border-b border-gold pb-4 w-fit max-w-full">
                Our commitment
              </h2>
              <ul className="space-y-5 md:space-y-6 max-w-xl">
                {commitmentItems.map((item) => (
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
