'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

const serviceRequestOptions = ['Meet & Assist', 'Fast Track', 'Porter', 'Buggy', 'Lounge Access', 'Transfer', 'Multiple / Custom'];
const bookingTypeOptions = ['Arrival', 'Departure', 'Transfer', 'Full Service'];

const inputClass = 'w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-gold focus:border-transparent';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) setSubmitted(true);
  }

  return (
    <>
      {/* Get In Touch */}
      <section className="section-padding bg-skyBlue border-b border-gray-200">
        <div className="container-custom max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-4 border-b border-gold pb-4 inline-block">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-lg mt-4">We are 24/7 to assist you.</p>
        </div>
      </section>

      {/* Request a Quote */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-6 border-b border-gold pb-3 w-fit">
            Request a Quote
          </h2>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-8 text-center max-w-xl mx-auto"
            >
              <p className="font-playfair text-xl text-gold mb-2">Thank you for your inquiry.</p>
              <p className="text-gray-700">We will get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input id="date" name="date" type="date" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="service_request" className="block text-sm font-medium text-gray-700 mb-1">Service / Request</label>
                    <select id="service_request" name="service_request" className={inputClass}>
                      <option value="">Select</option>
                      {serviceRequestOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input id="address" name="address" type="text" className={inputClass} placeholder="Street, City" />
                  </div>
                  <div>
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">Code</label>
                    <input id="code" name="code" type="text" className={inputClass} placeholder="Postal / ZIP code" />
                  </div>
                  <div>
                    <label htmlFor="booking_type" className="block text-sm font-medium text-gray-700 mb-1">Booking type</label>
                    <select id="booking_type" name="booking_type" className={inputClass}>
                      <option value="">Select</option>
                      {bookingTypeOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button type="submit" variant="primary" size="lg">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Instant Assistance */}
      <section className="section-padding bg-skyBlue border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-6 border-b border-gold pb-3 w-fit">
            Instant Assistance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center hover:border-gold transition-all group block"
            >
              <span className="text-gold font-playfair text-2xl font-semibold block mb-2">WhatsApp</span>
              <p className="text-gray-700 text-sm">Chat with us instantly</p>
            </motion.a>
            <motion.a
              href="tel:+919000000000"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 text-center hover:border-gold transition-all group block"
            >
              <span className="text-gold font-playfair text-2xl font-semibold block mb-2">24/7 Helpline</span>
              <p className="text-gray-700 text-sm">+91 90000 00000</p>
            </motion.a>
            <motion.a
              href="mailto:info@runwaytravel.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 text-center hover:border-gold transition-all group block"
            >
              <span className="text-gold font-playfair text-2xl font-semibold block mb-2">Email Us</span>
              <p className="text-gray-700 text-sm">info@runwaytravel.com</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Our Global Presence */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-6 border-b border-gold pb-3 w-fit max-w-full break-words">
            Our Global Presence
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-xl overflow-hidden aspect-video bg-skyBlue border border-gray-200 flex items-center justify-center lg:min-h-[280px]"
            >
              <p className="text-gray-500 text-center px-4">Map — Worldwide service</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-playfair text-sm font-semibold text-gold uppercase tracking-wider mb-2">Head quarter</h3>
                <p className="text-gray-700">Global operations — serving travelers at major hubs worldwide.</p>
              </div>
              <div>
                <h3 className="font-playfair text-sm font-semibold text-gold uppercase tracking-wider mb-3">Places</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Dubai (DXB)</li>
                  <li>London Heathrow (LHR)</li>
                  <li>Delhi (DEL)</li>
                  <li>Mumbai (BOM)</li>
                  <li>Singapore (SIN)</li>
                  <li>Doha (DOH)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
