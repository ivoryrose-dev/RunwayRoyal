'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import {
  MeetAssistIcon,
  FastTrackIcon,
  PorterIcon,
  BuggyIcon,
  LoungeIcon,
  TransferIcon,
} from '@/components/icons/ServiceIcons';

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

      <section className="section-padding bg-skyBlue border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
            Book your concierge service
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
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
