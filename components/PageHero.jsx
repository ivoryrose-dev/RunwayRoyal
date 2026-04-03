'use client';

import { motion } from 'framer-motion';

const DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920';

export default function PageHero({ title, subtitle, imageSrc }) {
  const bgImage = imageSrc || DEFAULT_HERO_IMAGE;
  return (
    <div className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-primary to-primary/90 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${bgImage})` }} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center section-padding w-full max-w-full min-w-0"
      >
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white px-1 break-words text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
