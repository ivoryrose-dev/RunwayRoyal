'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import imgMeetGreet from '@/src/assets/pranaam-bg.webp';
import imgLounges from '@/src/assets/Lounges2x.webp';
import imgDigiYatra from '@/src/assets/Digiyatra2x.webp';
import imgBagDrop from '@/src/assets/Selfbaggagedrop2x.webp';
import imgTransit from '@/src/assets/Transithotel2x.webp';

const serviceItems = [
  {
    image: imgMeetGreet,
    title: 'Arrival meet and greet',
    description:
      'Welcome at gate or arrival hall, fast-track immigration, baggage/porter help, escort to exit—ideal for international travelers and seniors.',
    alt: 'Arrival airport meet and greet service in India',
  },
  {
    image: imgLounges,
    title: 'Departure meet and greet',
    description:
      'From terminal entry through priority check-in and fast-track security to your gate—built for business travelers and families.',
    alt: 'Departure VIP airport assistance and lounge',
  },
  {
    image: imgTransit,
    title: 'Transit meet and assist',
    description:
      'Gate-to-gate help, faster connections, lounge on layovers, re-check-in and boarding support for international transit.',
    alt: 'Airport transit meet and assist between flights',
  },
  {
    image: imgDigiYatra,
    title: 'Fast track immigration',
    description:
      'Priority immigration and security where offered, shorter waits, coordinated flow—suited to busy and premium travelers.',
    alt: 'Fast track immigration and security at airport',
  },
  {
    image: imgBagDrop,
    title: 'Porter & lounge access',
    description:
      'Porter and trolley support plus lounge access with refreshments and Wi‑Fi before departure.',
    alt: 'Airport porter luggage assistance and lounge access',
  },
];

/** Time between auto-advances (ms) */
const AUTO_SCROLL_MS = 2800;

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduce;
}

export default function HomeServicesCarousel() {
  const scrollerRef = useRef(null);
  const indexRef = useRef(0);
  const scrollRafRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [canAutoScroll, setCanAutoScroll] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = usePrefersReducedMotion();

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-service-card]');
    if (!cards.length) return;
    const viewL = el.scrollLeft;
    const viewR = viewL + el.clientWidth;
    let best = 0;
    let bestOverlap = -1;
    cards.forEach((card, i) => {
      const l = card.offsetLeft;
      const r = l + card.offsetWidth;
      const overlap = Math.min(r, viewR) - Math.max(l, viewL);
      if (overlap > bestOverlap) {
        bestOverlap = overlap;
        best = i;
      }
    });
    indexRef.current = best;
    setActiveIndex(best);
  }, []);

  const onScrollThrottled = useCallback(() => {
    if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    scrollRafRef.current = requestAnimationFrame(updateActiveFromScroll);
  }, [updateActiveFromScroll]);

  const scrollToIndex = useCallback(
    (i) => {
      const root = scrollerRef.current;
      const cards = root?.querySelectorAll('[data-service-card]');
      if (!root || !cards?.length) return;
      const n = cards.length;
      const idx = ((i % n) + n) % n;
      indexRef.current = idx;
      setActiveIndex(idx);
      const card = cards[idx];
      const behavior = reduceMotion ? 'auto' : 'smooth';
      // scrollIntoView() also scrolls the *page* (block axis) — breaks vertical home scroll.
      const left = card.offsetLeft;
      root.scrollTo({ left, behavior });
    },
    [reduceMotion],
  );

  const scrollPrev = useCallback(() => {
    scrollToIndex(indexRef.current - 1);
  }, [scrollToIndex]);

  const scrollNext = useCallback(() => {
    scrollToIndex(indexRef.current + 1);
  }, [scrollToIndex]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return undefined;

    const updateScrollable = () => {
      setCanAutoScroll(root.scrollWidth > root.clientWidth + 2);
    };

    updateScrollable();
    const ro = new ResizeObserver(updateScrollable);
    ro.observe(root);
    window.addEventListener('resize', updateScrollable);
    root.addEventListener('scroll', onScrollThrottled, { passive: true });
    updateActiveFromScroll();

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateScrollable);
      root.removeEventListener('scroll', onScrollThrottled);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, [onScrollThrottled, updateActiveFromScroll]);

  useEffect(() => {
    if (paused || serviceItems.length <= 1 || !canAutoScroll || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      scrollToIndex(indexRef.current + 1);
    }, AUTO_SCROLL_MS);
    return () => window.clearInterval(id);
  }, [paused, canAutoScroll, reduceMotion, scrollToIndex]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollPrev();
    }
  };

  return (
    <div className="relative mt-2">
      <div
        className="relative rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-50/80 to-white/40 p-3 shadow-md shadow-primary/5 md:p-5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-3 left-0 z-[1] w-8 bg-gradient-to-r from-slate-50 to-transparent md:inset-y-4 md:w-10" aria-hidden />
        <div className="pointer-events-none absolute inset-y-3 right-0 z-[1] w-8 bg-gradient-to-l from-slate-50 to-transparent md:inset-y-4 md:w-10" aria-hidden />

        <div className="relative z-[2] mb-3 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white/90 text-primary shadow-sm backdrop-blur-sm transition hover:border-gold hover:bg-white hover:text-gold active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            aria-label="Previous service"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white/90 text-primary shadow-sm backdrop-blur-sm transition hover:border-gold hover:bg-white hover:text-gold active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            aria-label="Next service"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div
          ref={scrollerRef}
          role="region"
          aria-label="Our services"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className={`flex w-full touch-pan-x gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 pl-1 pr-3 md:pr-2 lg:pr-3 scroll-ps-2 scroll-pe-3 snap-x snap-proximity [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gold/35 ${reduceMotion ? '' : 'scroll-smooth'}`}
        >
          {serviceItems.map((item, i) => (
            <article
              key={item.title}
              data-service-card
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${serviceItems.length}: ${item.title}`}
              className="glass-card flex min-h-0 min-w-0 shrink-0 snap-start flex-col overflow-hidden transition-[box-shadow,transform] duration-200 ease-out flex-[0_0_min(88vw,22rem)] hover:-translate-y-0.5 hover:shadow-md md:flex-[0_0_calc((100%-1rem)/2)] lg:flex-[0_0_calc((100%-2rem)/3)] xl:flex-[0_0_calc((100%-3rem)/4)]"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 88vw, (max-width: 1024px) 45vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="flex min-h-0 flex-1 flex-col p-5 md:p-6">
                <h3 className="font-playfair text-lg sm:text-xl font-semibold text-primary mb-2 leading-snug text-balance">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed text-pretty">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="relative z-[2] mt-5 flex flex-wrap items-center justify-center gap-2"
          aria-label="Jump to a service"
        >
          {serviceItems.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-current={activeIndex === i ? 'true' : undefined}
              aria-label={`Show ${item.title}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                activeIndex === i ? 'w-8 bg-gold' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
