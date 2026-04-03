'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card p-5 sm:p-6 lg:p-8 h-full min-w-0 flex flex-col group hover:border-gold hover:shadow-gold-glow transition-all duration-300"
    >
      {Icon && (
        <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10" />
        </div>
      )}
      <h3 className="font-playfair text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">{description}</p>
    </motion.div>
  );
}
