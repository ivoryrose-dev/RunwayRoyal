'use client';

import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, author, role, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-8 flex flex-col"
    >
      <p className="text-gray-800 text-lg italic mb-6 flex-1">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-playfair font-semibold text-gold">{author}</p>
        {role && <p className="text-gray-600 text-sm">{role}</p>}
      </div>
    </motion.div>
  );
}
