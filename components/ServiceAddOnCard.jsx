'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceAddOnCard({ image, title, description, alt, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-gold-glow group"
    >
      <div className="relative aspect-[5/3] w-full shrink-0 bg-slate-100">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col min-w-0 p-4 sm:p-6 lg:p-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Add-on</p>
        <h3 className="font-playfair text-lg font-semibold text-primary md:text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.article>
  );
}
