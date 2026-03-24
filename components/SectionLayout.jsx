'use client';

import { motion } from 'framer-motion';

export default function SectionLayout({
  children,
  title,
  subtitle,
  className = '',
  id,
  noAnimation = false,
}) {
  const content = (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            {title && (
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && <p className="text-gray-700 text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );

  if (noAnimation) return content;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
}
