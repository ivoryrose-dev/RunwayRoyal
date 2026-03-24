'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ({ items, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-white border-t border-gray-200">
      <div className="container-custom max-w-3xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-4 border-b border-gold pb-4 inline-block mx-auto block w-fit">
          {title}
        </h2>
        <ul className="mt-12 space-y-2">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const id = `faq-answer-${index}`;
            return (
              <li key={index} className="glass-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  id={`faq-question-${index}`}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 text-primary font-playfair font-medium hover:bg-gray-50/50 transition-colors"
                >
                  <span>{item.question}</span>
                  <span className="text-gold shrink-0 text-xl" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={id}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-2">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
