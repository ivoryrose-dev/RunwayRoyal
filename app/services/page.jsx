'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import ServiceAddOnCard from '@/components/ServiceAddOnCard';
import Button from '@/components/Button';
import {
  MeetAssistIcon,
  FastTrackIcon,
  PorterIcon,
  BuggyIcon,
  LoungeIcon,
  TransferIcon,
} from '@/components/icons/ServiceIcons';
import imgBuggyAddOn from '@/src/assets/Buggy.webp';
import imgFlowerCart from '@/src/assets/Flower Cart.webp';
import imgLoungeAddOn from '@/src/assets/Lounge.webp';
import imgSpaService from '@/src/assets/Spa-Service.webp';

const services = [
  {
    icon: MeetAssistIcon,
    title: 'Meet & Assist',
    description:
      'A personal airport concierge welcomes you and guides you through the entire airport process—check-in, security, immigration, and boarding—so you can focus on what matters.',
  },
  {
    icon: FastTrackIcon,
    title: 'Fast Track Immigration',
    description:
      'Skip long queues with priority access through immigration and security checkpoints. Save time and reduce stress at busy hubs worldwide.',
  },
  {
    icon: PorterIcon,
    title: 'Porter Assistance',
    description:
      'Professional baggage assistance from curb to gate. Our porters ensure your luggage is handled with care and you travel in comfort.',
  },
  {
    icon: BuggyIcon,
    title: 'Buggy Service',
    description:
      'Electric cart transportation inside large airport terminals. Ideal for long distances, tight connections, or when you prefer to relax between flights.',
  },
  {
    icon: LoungeIcon,
    title: 'Airport Lounge Access',
    description:
      'Relax in premium airport lounges before your flight. Enjoy complimentary refreshments, Wi-Fi, and a quiet space to work or unwind.',
  },
  {
    icon: TransferIcon,
    title: 'Luxury Airport Transfers',
    description:
      'Private chauffeur-driven transfers to and from the airport in premium vehicles. Door-to-door service for a seamless start and end to your journey.',
  },
];

const BOOK_CONCIERGE_BG =
  'https://images.unsplash.com/photo-1540969795439-9f991863addd?w=1920';

const addOnServices = [
  {
    image: imgBuggyAddOn,
    title: 'Terminal buggy escort',
    description:
      'Optional electric cart service inside the terminal for long walks, tight connections, or extra comfort. Add it to meet & assist or request it on its own where the airport offers buggies.',
    alt: 'Airport terminal electric buggy service',
  },
  {
    image: imgFlowerCart,
    title: 'Flowers & welcome gestures',
    description:
      'Pre-arranged bouquets or welcome arrangements for arrivals, VIP guests, or special occasions—coordinated with your greeter so everything is ready at the meeting point.',
    alt: 'Floral welcome and cart service at the airport',
  },
  {
    image: imgLoungeAddOn,
    title: 'Partner lounge upgrades',
    description:
      'Access to additional partner lounges, longer stays, or lounge bundles beyond standard inclusion. We match you to the right lounge for your airline, terminal, and travel class.',
    alt: 'Premium airport lounge seating and amenities',
  },
  {
    image: imgSpaService,
    title: 'Airport spa time',
    description:
      'Book massage, wellness, or spa time before departure or between flights at participating airports—ideal for long-haul travelers who want to reset before boarding.',
    alt: 'Airport spa and wellness service',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Premium VIP airport concierge services worldwide."
        imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-gray-200 bg-skyBlue">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-3 border-b border-gold pb-3 w-fit">
            Add-on services
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mt-4 mb-10 leading-relaxed">
            Optional extras to layer onto your core booking. Tell us what you need when you request a quote or speak with our concierge—we will confirm availability at your airport.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {addOnServices.map((s, i) => (
              <ServiceAddOnCard
                key={s.title}
                image={s.image}
                title={s.title}
                description={s.description}
                alt={s.alt}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-padding border-t border-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BOOK_CONCIERGE_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 container-custom text-center"
        >
          <h2 className="font-playfair text-3xl font-semibold text-white mb-4">
            Book your concierge service
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Contact us to customize your airport experience. Our team is available 24/7 to assist you.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </>
  );
}
