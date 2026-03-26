'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import globalReachImage from '@/src/assets/Global reach.jpeg';
import {
  MeetAssistIcon,
  FastTrackIcon,
  TransferIcon,
} from '@/components/icons/ServiceIcons';

const travelSectorOptions = ['Domestic', 'International'];
const airportOptions = ['Dubai (DXB)', 'London Heathrow (LHR)', 'Delhi (DEL)', 'Mumbai (BOM)', 'Singapore (SIN)', 'Doha (DOH)', 'Other'];

const services = [
  {
    icon: MeetAssistIcon,
    title: 'Arrival (Service 01)',
    description: 'Meet & Assist, Fast Track, and lounge access from the moment you land. Your concierge greets you and guides you through arrival.',
  },
  {
    icon: FastTrackIcon,
    title: 'Departures (Service 02)',
    description: 'Seamless departure support: check-in, security fast track, porter assistance, and lounge access before your flight.',
  },
  {
    icon: TransferIcon,
    title: 'Transfer (Service 03)',
    description: 'Luxury chauffeur-driven transfers to and from the airport. Door-to-door in premium vehicles.',
  },
];

const whyChoose = [
  { title: 'VIP Airport Concierge Specialists', text: 'Expert team dedicated to your comfort.' },
  { title: 'Global Airport Network', text: 'Services at major airports worldwide.' },
  { title: '24/7 Customer Support', text: 'Around-the-clock assistance when you need it.' },
  { title: 'Seamless Luxury Experience', text: 'Every detail handled with care.' },
];

const trustStats = [
  { value: '4.8', label: 'Rating', stars: true },
  { value: '10,000+', label: 'Travelers' },
  { value: '24/7', label: 'Support' },
  { value: '50+', label: 'Airports' },
];

const faqItems = [
  {
    question: 'How do I book services?',
    answer:
      'You can book through our website by filling out the Quick Booking form on the home page or the Request a Quote form on the Contact page. You can also call or WhatsApp us for immediate assistance—our team is available 24/7.',
  },
  {
    question: 'Which airports do you serve?',
    answer:
      'We serve major airports worldwide including Dubai (DXB), London Heathrow (LHR), Delhi (DEL), Mumbai (BOM), Singapore (SIN), Doha (DOH), and many more. Contact us to confirm availability at your airport.',
  },
  {
    question: 'Do you provide transportation at Mumbai and Delhi airports?',
    answer:
      'Yes. We offer luxury airport transfers at Mumbai, Delhi, and other Indian and international airports. Mention your transfer requirements when submitting a quote or booking request, and our team will arrange a chauffeur-driven vehicle for you.',
  },
  {
    question: 'What are the average charges for your services?',
    answer:
      'Charges vary by airport and service type (arrival, departure, lounge access, transfers, etc.). For accurate pricing, please submit a quote request with your travel details, or contact us by phone or email. We will provide a tailored quote.',
  },
  {
    question: 'Is your service reliable?',
    answer:
      'Yes. We are committed to a seamless, stress-free experience. Our dedicated concierge team is available 24/7, and we work with trained professionals at each airport. If you have any concerns during or after your journey, contact us and we will address them promptly.',
  },
];

const testimonials = [
  {
    quote: 'Exceptional service from start to finish. The team made my layover in Dubai completely stress-free.',
    author: 'James Mitchell',
    role: 'Business Executive',
  },
  {
    quote: 'RunwayTravel transformed my airport experience. Fast track and lounge access were worth every penny.',
    author: 'Sarah Chen',
    role: 'Frequent Traveler',
  },
  {
    quote: 'The luxury transfer and meet & assist made traveling with my family an absolute pleasure.',
    author: 'David & Emma Roberts',
    role: 'Family Travelers',
  },
  {
    quote: 'Discreet, efficient, and always on time. This is how airport travel should feel.',
    author: 'Michael Torres',
    role: 'International Consultant',
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('arrival');
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle | loading | success | error

  async function handleQuickBooking(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = {
      tab: activeTab,
      travelSector: formData.get('travelSector') || '',
      departureAirport: formData.get('departureAirport') || '',
      arrivalAirport: formData.get('arrivalAirport') || '',
      arrivalDate: formData.get('arrivalDate') || '',
      departureDate: formData.get('departureDate') || '',
      flightHour: formData.get('flightHour') || '',
      flightMinute: formData.get('flightMinute') || '',
      flightNo: formData.get('flightNo') || '',
      adult: formData.get('adult') || '1',
    };

    const required =
      payload.travelSector &&
      payload.departureAirport &&
      payload.arrivalAirport &&
      payload.flightNo &&
      (activeTab === 'arrival' ? payload.arrivalDate : payload.departureDate);
    if (!required) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('loading');
    try {
      const res = await fetch('/api/quick-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  }

  const inputClass =
    'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-gold/70 focus:border-gold/40 transition';

  return (
    <>
      {/* Hero – split layout with content + booking panel */}
      <section className="relative min-h-svh overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920"
          alt="Luxury travel"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 section-padding min-h-svh flex items-center">
          <div className="container-custom w-full">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="order-1 max-w-2xl"
              >
                <p className="inline-flex items-center rounded-full border border-gold/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase mb-5">
                  VIP Airport Concierge Worldwide
                </p>
                <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white">
                  Your Journey,
                  <span className="text-gold"> Redefined.</span>
                </h1>
                <p className="mt-5 text-white/90 text-base md:text-lg max-w-xl">
                  Seamless arrivals, departures, and transfers with a dedicated concierge at every step.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/contact" variant="primary">
                    Request A Quote
                  </Button>
                  <p className="text-sm text-white/90">
                    Trusted by <span className="font-semibold text-gold">10,000+</span> travelers worldwide.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="order-2 w-full max-w-xl xl:ml-auto"
              >
                <div className="hero-booking-shell">
                  <div className="px-6 pt-6 md:px-8 md:pt-8">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                      Quick Booking
                    </p>
                    <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mt-2">
                      Plan Your Next Flight
                    </h2>
                    <p className="text-slate-600 text-sm mt-2">
                      Share your details and our concierge team will get back to you shortly.
                    </p>
                  </div>

                  <div className="mt-6 border-y border-slate-200/80 bg-slate-50/70">
                    <div className="grid grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab('arrival')}
                        className={`py-3 px-4 text-sm font-medium transition-colors ${
                          activeTab === 'arrival'
                            ? 'bg-gold text-primary'
                            : 'text-slate-600 hover:text-primary'
                        }`}
                      >
                        Arrival
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('departure')}
                        className={`py-3 px-4 text-sm font-medium transition-colors ${
                          activeTab === 'departure'
                            ? 'bg-gold text-primary'
                            : 'text-slate-600 hover:text-primary'
                        }`}
                      >
                        Departure
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleQuickBooking} className="p-6 md:p-8">
                    <div className="mb-5">
                      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                        Travel Details
                      </p>
                      <p className="text-slate-600 text-xs mt-1">
                        Fill in the form to receive a confirmed concierge response within minutes.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="travelSector" className="block text-sm font-medium text-slate-700 mb-1">
                          Select Travel Sector (*)
                        </label>
                        <select id="travelSector" name="travelSector" required className={inputClass}>
                          <option value="">Select Travel Sector</option>
                          {travelSectorOptions.map((o) => (
                            <option key={o} value={o} className="bg-white text-primary">{o}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="departureAirport" className="block text-sm font-medium text-slate-700 mb-1">
                          Departure Airport (*)
                        </label>
                        <input
                          id="departureAirport"
                          name="departureAirport"
                          type="text"
                          required
                          placeholder="Departure Airport"
                          className={inputClass}
                        />
                      </div>
                      {activeTab === 'arrival' ? (
                        <>
                          <div>
                            <label htmlFor="arrivalDate" className="block text-sm font-medium text-slate-700 mb-1">
                              Arrival Date (*)
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </span>
                              <input
                                id="arrivalDate"
                                name="arrivalDate"
                                type="date"
                                required
                                className={`${inputClass} pl-10`}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="arrivalAirport" className="block text-sm font-medium text-slate-700 mb-1">
                              Arrival Airport (*)
                            </label>
                            <input
                              id="arrivalAirport"
                              name="arrivalAirport"
                              type="text"
                              required
                              placeholder="Arrival Airport"
                              className={inputClass}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <label htmlFor="departureDate" className="block text-sm font-medium text-slate-700 mb-1">
                              Departure Date (*)
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </span>
                              <input
                                id="departureDate"
                                name="departureDate"
                                type="date"
                                required
                                className={`${inputClass} pl-10`}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="arrivalAirport" className="block text-sm font-medium text-slate-700 mb-1">
                              Arrival Airport (*)
                            </label>
                            <input
                              id="arrivalAirport"
                              name="arrivalAirport"
                              type="text"
                              required
                              placeholder="Arrival Airport"
                              className={inputClass}
                            />
                          </div>
                        </>
                      )}
                      <div>
                        <label htmlFor="flightHour" className="block text-sm font-medium text-slate-700 mb-1">
                          Flight (Hour)
                        </label>
                        <input
                          id="flightHour"
                          name="flightHour"
                          type="number"
                          min={0}
                          max={23}
                          placeholder="00"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="flightMinute" className="block text-sm font-medium text-slate-700 mb-1">
                          Flight (Minute)
                        </label>
                        <input
                          id="flightMinute"
                          name="flightMinute"
                          type="number"
                          min={0}
                          max={59}
                          placeholder="00"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="flightNo" className="block text-sm font-medium text-slate-700 mb-1">
                          Flight No. (*)
                        </label>
                        <input
                          id="flightNo"
                          name="flightNo"
                          type="text"
                          required
                          placeholder="Flight No."
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="adult" className="block text-sm font-medium text-slate-700 mb-1">
                          Adult
                        </label>
                        <input
                          id="adult"
                          name="adult"
                          type="number"
                          min={1}
                          defaultValue={1}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {submitStatus === 'success' && (
                      <p className="mt-4 text-emerald-700 text-sm">Request received. We will contact you shortly.</p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="mt-4 text-red-600 text-sm">Something went wrong. Please try again or contact us.</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="mt-6 w-full bg-primary text-white font-medium py-3 px-6 rounded-xl hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-white uppercase tracking-wider disabled:opacity-60 transition-all"
                    >
                      {submitStatus === 'loading' ? 'Sending...' : 'Search Concierge Availability'}
                    </button>
                    <p className="mt-3 text-[11px] text-slate-600 text-center">
                      Priority support available <span className="font-semibold text-primary">24/7</span> for all bookings.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats bar */}
      <section className="bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-24">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center min-w-0 flex flex-col items-center"
              >
                <div className="w-full min-h-[4.25rem] sm:min-h-[3.5rem] lg:min-h-[4rem] flex flex-col items-center justify-center">
                  {stat.stars ? (
                    <p className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-primary flex flex-col items-center sm:flex-row sm:justify-center gap-0.5 sm:gap-0">
                      <span>{stat.value}</span>
                      <span
                        className="text-gold text-base sm:text-xl leading-tight sm:ml-1"
                        aria-hidden="true"
                      >
                        ★★★★★
                      </span>
                    </p>
                  ) : (
                    <p className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                      {stat.value}
                    </p>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services – 3 cards */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-4 border-b border-gold pb-4 inline-block mx-auto block w-fit">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {services.map((s, i) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us – 4 cards */}
      <section className="section-padding bg-skyBlue border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-4 border-b border-gold pb-4 inline-block mx-auto block w-fit">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:border-gold transition-all"
              >
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback – 4 testimonials */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-4 border-b border-gold pb-4 inline-block mx-auto block w-fit">
            Client Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} quote={t.quote} author={t.author} role={t.role} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-skyBlue border-t border-gray-200 overflow-hidden min-w-0">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-4 border-b border-gold pb-4 inline-block mx-auto block w-fit">
            Global Reach
          </h2>
        </div>
        <div className="mt-12 w-full max-w-full min-w-0 lg:w-screen lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-gray-200 border-gold/25 shadow-md min-h-[230px] aspect-[16/9] max-h-[320px] sm:aspect-[21/9] sm:max-h-[400px] lg:rounded-none lg:border-x-0 lg:border-y lg:border-gold/30 lg:aspect-auto lg:max-h-none lg:min-h-[360px] lg:h-[clamp(340px,33vw,520px)]"
          >
            <Image
              src={globalReachImage}
              alt="Global reach"
              fill
              className="object-cover object-[center_35%] opacity-95 sm:object-[center_40%]"
              sizes="(max-width: 1023px) 100vw, 100vw"
            />
            <div className="absolute inset-0 hero-overlay" aria-hidden />
            <div className="absolute inset-0 bg-primary/15 pointer-events-none" aria-hidden />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
              <p className="font-playfair text-xl sm:text-2xl lg:text-3xl text-white text-center max-w-3xl mx-auto leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]">
                Premium concierge services at major airports worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </>
  );
}
