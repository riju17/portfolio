'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/AnimatedButton';
import WorldCard from '@/components/WorldCard';

const heroBg: Record<string, string> = {
  default: 'from-[#3c1053] via-[#0B132B] to-[#050210]',
  studio: 'from-[#FFB347] via-[#F2709C] to-[#320D3E]',
  lab: 'from-[#050210] via-[#0f0f3b] to-[#00f5d4]',
  street: 'from-[#0f172a] via-[#132d1f] to-[#0b4334]'
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
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <section className="grid gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">Portal</p>
          <h1 className="mt-4 text-5xl font-display leading-tight md:text-6xl">Hey, I’m Riju.</h1>
          <p className="mt-4 text-lg text-white/80">
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
            className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-white/70"
          >
            Or wander the Street →
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={`relative h-[420px] overflow-hidden rounded-[36px] bg-gradient-to-br ${heroBg[activeWorld]} p-10 text-white shadow-glow`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.5em]">Multiverse</p>
              <h2 className="text-4xl font-display">Three worlds, one energy.</h2>
              <p className="text-white/70">
                Each portal is interconnected through typography, narration, and motion cues so the journey feels
                intentional.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-[0.3em] text-white/60">
              <div>
                <p>Studio</p>
                <p className="text-white">Craft</p>
              </div>
              <div>
                <p>Lab</p>
                <p className="text-white">Code</p>
              </div>
              <div>
                <p>Street</p>
                <p className="text-white">Camera</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-20 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.6em] text-white/50">Worlds</p>
          <h2 className="section-heading">Pick a reality to explore.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <WorldCard key={card.title} {...card} delay={index * 0.1} />
          ))}
        </div>
      </section>
    </div>
  );
}
