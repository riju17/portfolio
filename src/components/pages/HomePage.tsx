'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';
import WorldCard from '@/components/WorldCard';

const heroBg: Record<string, string> = {
  default: 'from-[#fff7f0] via-[#f2f6ff] to-[#f7fbff]',
  studio: 'from-[#ffe4d9] via-[#f8e7ff] to-[#e8f2ff]',
  lab: 'from-[#e6fbff] via-[#f5fbff] to-[#e8f4ff]',
  street: 'from-[#fff1e1] via-[#f2f6ff] to-[#f9fbff]'
};

const cards = [
  {
    title: 'Studio',
    description: 'Brand alchemy for boutique teams + weird internet launches.',
    badge: 'Creative',
    href: '/studio',
    theme: 'studio' as const
  },
  {
    title: 'Lab',
    description: 'Nerd playground of technical experiments disguised as games.',
    badge: 'Engineering',
    href: '/lab',
    theme: 'lab' as const
  },
  {
    title: 'Street',
    description: 'Frames from life, cinematic travel + portrait studies.',
    badge: 'Photography',
    href: '/street',
    theme: 'street' as const
  }
];

/**
 * HomePage introduces the multiverse portal hero with world cards.
 */
export default function HomePage() {
  const [activeWorld, setActiveWorld] = useState<keyof typeof heroBg>('default');

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7f0] via-[#f2f6ff] to-[#f7fbff] text-black">
      <div className="pointer-events-none absolute -left-32 top-8 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-60px] bottom-10 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-28 w-28 rounded-full border border-black/5" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur"
          >
            <p className="text-sm uppercase tracking-[0.5em] text-black/60">Portal</p>
            <h1 className="mt-4 text-5xl font-display leading-tight md:text-6xl">Hey, I’m Riju.</h1>
            <p className="mt-4 text-lg text-black/70">
              I design with logic, empathy, and a deep respect for detail. I’m Riju—a Computer Science student, UI/UX
              designer, and builder who loves creating systems that feel right as much as they work right.
            </p>
            <p className="mt-3 text-lg text-black/70">
              My work spans product interfaces, analytics dashboards, accessibility-focused ML solutions, and brand-driven
              digital experiences. Whether I’m designing an interface, analyzing performance data, or structuring an
              application backend, my goal stays the same: make things simpler, smarter, and more human.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AnimatedButton
                href="/studio"
                onMouseEnter={() => setActiveWorld('studio')}
                onMouseLeave={() => setActiveWorld('default')}
              >
                Enter the Studio
              </AnimatedButton>
              <AnimatedButton
                href="/lab"
                variant="secondary"
                onMouseEnter={() => setActiveWorld('lab')}
                onMouseLeave={() => setActiveWorld('default')}
              >
                Enter the Lab
              </AnimatedButton>
            </div>
            <Link
              href="/street"
              onMouseEnter={() => setActiveWorld('street')}
              onMouseLeave={() => setActiveWorld('default')}
              className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-black/70"
            >
              Or wander the Street →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-80 overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur md:h-96"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${heroBg[activeWorld]} opacity-60`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0%,_transparent_60%)]" />
            <div className="relative h-full">
              <Image
                src="/Riju/Rijumain.JPG"
                alt="Portrait of Riju"
                fill
                sizes="(min-width: 768px) 384px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        <section className="mt-20 space-y-10">
          <div>
            <p className="text-sm uppercase tracking-[0.6em] text-black/50">Worlds</p>
            <p className="mt-2 text-base text-black/70">
              Three worlds, one energy. Pick a reality to explore.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {cards.map((card, index) => (
              <WorldCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
