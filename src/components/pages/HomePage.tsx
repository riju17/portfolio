'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
        <section className="grid gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-[0.5em] text-black/60">Portal</p>
            <h1 className="mt-4 text-5xl font-display leading-tight md:text-6xl">Hey, I’m Riju.</h1>
            <p className="mt-4 text-lg text-black/70">
              Creative director, engineer, and photographer weaving branded worlds, sci-fi laboratories, and cinematic
              street frames.
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
            className="relative h-[420px] overflow-hidden rounded-[36px] border border-black/5 bg-white/70 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${heroBg[activeWorld]} opacity-70`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="space-y-3">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border border-black/5 bg-gradient-to-r ${heroBg[activeWorld]} px-4 py-2 text-xs uppercase tracking-[0.4em] text-black/70`}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                  Multiverse
                </div>
                <h2 className="text-4xl font-display text-black">Three worlds, one energy.</h2>
                <p className="text-black/70">
                  Each portal is interconnected through typography, narration, and motion cues so the journey feels intentional.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-[0.3em] text-black/60">
                <div>
                  <p>Studio</p>
                  <p className="text-black">Craft</p>
                </div>
                <div>
                  <p>Lab</p>
                  <p className="text-black">Code</p>
                </div>
                <div>
                  <p>Street</p>
                  <p className="text-black">Camera</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-20 space-y-10">
          <div>
            <p className="text-sm uppercase tracking-[0.6em] text-black/50">Worlds</p>
            <h2 className="section-heading">Pick a reality to explore.</h2>
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
