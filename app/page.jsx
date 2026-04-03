'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import HomeServicesCarousel from '@/components/HomeServicesCarousel';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import globalReachHeroImage from '@/src/assets/flight-computer-graphic-airplane-wireless-cap.jpg';
const travelSectorOptions = ['Domestic', 'International'];
const airportOptions = ['Dubai (DXB)', 'London Heathrow (LHR)', 'Delhi (DEL)', 'Mumbai (BOM)', 'Singapore (SIN)', 'Doha (DOH)', 'Other'];

const whyChoose = [
  {
    title: '24/7 customer support',
    text: 'Call, WhatsApp, or book anytime—quick answers and end-to-end coordination.',
  },
  {
    title: 'Trusted by global travelers',
    text: 'Meet & greet, fast track, and lounges across India and 600+ airports.',
  },
  {
    title: 'Safe & secure booking',
    text: 'Clear quotes, no hidden fees, instant confirmation before you fly.',
  },
  {
    title: 'Experienced airport staff',
    text: 'Trained greeters who know terminals, immigration, and smooth passenger flow.',
  },
];

const trustStats = [
  { value: '600+', label: 'Airports worldwide' },
  { value: '24/7', label: 'Live support' },
  { value: '100%', label: 'Secure booking' },
];

const faqItems = [
  {
    question: 'What is airport meet and greet service?',
    answer:
      'A greeter helps with check-in, immigration, baggage, and wayfinding so you avoid stress and long queues.',
  },
  {
    question: 'Can I book airport assistance for elderly passengers?',
    answer:
      'Yes—wheelchair support, escort, and priority handling where available. Share needs when you book.',
  },
  {
    question: 'How do I book airport meet and greet service?',
    answer:
      'Use the form on this page, request a quote on Contact, or WhatsApp us for fast confirmation—24/7.',
  },
  {
    question: 'Which airports in India do you cover?',
    answer:
      'Mumbai, Delhi, Bangalore, Ahmedabad, and more—plus 600+ airports globally. Send your route to confirm.',
  },
  {
    question: 'How is pricing calculated?',
    answer:
      'By airport, service type (arrival, departure, transit), and add-ons. Tailored quotes, no hidden fees.',
  },
];

const testimonials = [
  {
    quote:
      "Peace of mind from arrival to boarding—every step explained and handled professionally.",
    author: 'Priya N.',
    role: 'International traveler',
  },
  {
    quote:
      'Fast track and a gate greeter saved us hours on a tight connection—great for families and seniors.',
    author: 'Rahul K.',
    role: 'Family traveler',
  },
  {
    quote:
      'WhatsApp booking in minutes; instant confirmation and clear meet-point details at Mumbai.',
    author: 'Anita S.',
    role: 'Business traveler',
  },
  {
    quote:
      "Wheelchair and escort through immigration for my parents' arrival—completely stress-free.",
    author: 'Vikram M.',
    role: 'Booked for elderly parents',
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
      guestName: formData.get('guestName') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      adult: formData.get('adult') || '1',
    };

    const required =
      payload.travelSector &&
      payload.departureAirport &&
      payload.arrivalAirport &&
      payload.flightNo &&
      payload.guestName &&
      payload.email &&
      payload.phone &&
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
          alt="Airport meet and greet and VIP assistance at terminal"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 section-padding min-h-svh flex items-center py-12 sm:py-16">
          <div className="container-custom w-full max-w-[1400px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start xl:items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="order-1 max-w-2xl xl:max-w-none xl:pr-4"
              >
                <p className="inline-flex items-center rounded-full border border-gold/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase mb-5">
                  VIP airport assistance · India & worldwide
                </p>
                <h1 className="font-playfair text-[1.65rem] leading-tight sm:text-4xl md:text-[2.35rem] lg:text-5xl font-semibold text-white max-w-3xl break-words text-balance">
                  Airport Meet and Greet Service in India{' '}
                  <span className="text-gold">| VIP Airport Assistance Booking</span>
                </h1>
                <p className="mt-5 text-white/90 text-base md:text-lg max-w-xl leading-relaxed">
                  Skip queues and stress—professional assistance for arrivals, departures &amp; transit at{' '}
                  <span className="font-semibold text-white">600+ airports worldwide</span>.
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-white/95 text-sm md:text-base max-w-xl sm:max-w-2xl">
                  {['Fast track immigration', 'Personal assistance', 'Lounge access', '24/7 support'].map((line) => (
                    <li key={line} className="flex gap-2.5 items-start">
                      <span className="text-gold font-bold shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5">
                  <Button href="/contact" variant="primary" className="text-center !px-5 !py-3 !text-sm sm:!text-base shrink-0">
                    Book airport meet &amp; greet online in minutes
                  </Button>
                  <p className="text-sm text-white/90 sm:max-w-[14rem]">
                    <span className="text-gold mr-1" aria-hidden>
                      👉
                    </span>
                    Instant guidance via{' '}
                    <a
                      href="https://wa.me/919000000000"
                      className="font-semibold text-gold underline underline-offset-2 hover:text-white"
                    >
                      WhatsApp
                    </a>
                    {' · '}
                    <a href="tel:+919000000000" className="font-semibold text-gold underline underline-offset-2 hover:text-white">
                      Call
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="order-2 w-full max-w-xl xl:ml-auto xl:sticky xl:top-[calc(var(--navbar-h)+1.25rem)] xl:z-[5] xl:self-start"
              >
                <div className="hero-booking-shell shadow-xl shadow-primary/10">
                  <div className="px-4 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5 md:px-8 md:pt-8 border-b border-slate-200/80">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                      Book online
                    </p>
                    <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-primary mt-2 leading-snug">
                      Book airport meet and greet service online
                    </h2>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      VIP assistance for business travelers, families, seniors, and first-time flyers—smooth arrival, departure, or transit.
                    </p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-slate-700 text-sm">
                      {[
                        'Meet & assist at entry / gate',
                        'Priority check-in & security',
                        'Fast track immigration',
                        'Baggage & porter support',
                      ].map((line) => (
                        <li key={line} className="flex gap-2 items-start">
                          <span className="text-gold font-bold shrink-0" aria-hidden>
                            ✓
                          </span>
                          <span className="leading-snug">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-y border-slate-200/80 bg-slate-50/70">
                    <div className="grid grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab('arrival')}
                        className={`py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium transition-colors ${
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
                        className={`py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium transition-colors ${
                          activeTab === 'departure'
                            ? 'bg-gold text-primary'
                            : 'text-slate-600 hover:text-primary'
                        }`}
                      >
                        Departure
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleQuickBooking} className="p-4 sm:p-6 md:p-8">
                    <div className="mb-5">
                      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                        Travel Details
                      </p>
                      <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                        Submit details for a quick confirmation from our team.
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
                        <label htmlFor="guestName" className="block text-sm font-medium text-slate-700 mb-1">
                          Guest Name (*)
                        </label>
                        <input
                          id="guestName"
                          name="guestName"
                          type="text"
                          required
                          placeholder="Guest full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email (*)
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          Phone Number (*)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+1 234 567 8900"
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
                      className="mt-6 w-full bg-primary text-white font-medium py-3 px-6 rounded-xl hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-white uppercase tracking-wider disabled:opacity-60 transition-all text-sm sm:text-base"
                    >
                      {submitStatus === 'loading' ? 'Sending...' : 'Submit & get confirmation'}
                    </button>
                    <p className="mt-3 text-[11px] text-slate-600 text-center leading-relaxed">
                      <span className="font-semibold text-primary">24/7</span> support · Quick response · Global coverage
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats + pricing intro */}
      <section className="bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-10 md:py-14 lg:py-20">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-primary mb-3 border-b border-gold pb-3 px-2">
              Airport meet and greet service price
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
              Flexible pricing by airport and service. Custom packages,{' '}
              <span className="font-medium text-primary">no hidden charges</span>—contact us for instant booking.
            </p>
          </div>
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card text-center min-w-0 flex flex-col items-center justify-center p-5 sm:p-6 md:p-7 min-h-[9.5rem]"
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

      {/* Our Services – image carousel */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-3 border-b border-gold pb-4 px-2 leading-tight">
              Our airport assistance services
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
              Arrival, departure, and transit meet &amp; greet; fast track, porter, and lounge where available.
            </p>
          </div>
          <HomeServicesCarousel />
          <div className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View all services &amp; add-ons
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us – 4 cards */}
      <section className="section-padding bg-skyBlue border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3 border-b border-gold pb-4 px-2 leading-tight">
              Why choose our airport meet &amp; greet service?
            </h2>
            <p className="text-gray-700 text-sm max-w-xl leading-relaxed">
              We don&apos;t just offer a service—we deliver peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex h-full flex-col p-6 md:p-7 text-center hover:border-gold transition-all"
              >
                <h3 className="font-playfair text-lg font-semibold text-primary mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still confused + social proof + CTA (same grid structure) */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3 border-b border-gold pb-4 px-2 leading-tight">
              Still confused about our services?
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-2xl leading-relaxed">
              We match the right assistance to your route, passengers, and schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.author} quote={t.quote} author={t.author} role={t.role} index={i} />
            ))}
          </div>
          <div className="mt-14 max-w-3xl mx-auto rounded-2xl border border-gray-200/80 bg-gradient-to-b from-slate-50/90 to-white px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 text-center shadow-sm min-w-0">
            <p className="text-2xl sm:text-3xl font-playfair font-semibold text-primary mb-2">Talk to our experts now</p>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              <span aria-hidden>📞</span> Get instant guidance &amp; booking support
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Button href="tel:+919000000000" variant="primary" size="md">
                Call now
              </Button>
              <Button
                href="https://wa.me/919000000000"
                variant="secondary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </Button>
              <Button href="/contact" variant="primary" size="md">
                Book online
              </Button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="font-playfair text-xl md:text-2xl font-semibold text-primary mb-5">Get in touch</h3>
            <ul className="text-gray-700 text-sm md:text-base flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-2xl mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-gold font-bold" aria-hidden>
                  ✓
                </span>
                <span>24/7 support available</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold font-bold" aria-hidden>
                  ✓
                </span>
                <span>Quick response team</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold font-bold" aria-hidden>
                  ✓
                </span>
                <span>Global service coverage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-skyBlue border-t border-gray-200 overflow-hidden min-w-0">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-8">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3 border-b border-gold pb-4 px-2 leading-tight">
              Airports we serve in India
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-2xl leading-relaxed">
              Mumbai, Delhi, Bangalore, Ahmedabad—plus{' '}
              <span className="font-semibold text-primary">600+ airports worldwide</span>.
            </p>
          </div>
        </div>
        <div className="mt-2 w-full max-w-full min-w-0 lg:w-screen lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-gray-200 border-gold/25 shadow-md min-h-[230px] aspect-[16/9] max-h-[320px] sm:aspect-[21/9] sm:max-h-[400px] lg:rounded-none lg:border-x-0 lg:border-y lg:border-gold/30 lg:aspect-auto lg:max-h-none lg:min-h-[360px] lg:h-[clamp(340px,33vw,520px)]"
          >
            <Image
              src={globalReachHeroImage}
              alt="Airport concierge professional with headset and aircraft on the tarmac"
              fill
              className="object-cover object-[center_40%] opacity-95 sm:object-center"
              sizes="(max-width: 1023px) 100vw, 100vw"
            />
            <div className="absolute inset-0 hero-overlay" aria-hidden />
            <div className="absolute inset-0 bg-primary/15 pointer-events-none" aria-hidden />
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
              <p className="font-playfair text-lg sm:text-xl lg:text-2xl text-white text-center max-w-3xl mx-auto leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] px-2">
                Mumbai · Delhi · Bangalore · Ahmedabad + 600+ globally. Same-day quotes &amp; coordinators.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ items={faqItems} title="Frequently asked questions (FAQs)" />
    </>
  );
}
