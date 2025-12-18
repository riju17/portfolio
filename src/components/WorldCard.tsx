'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type WorldCardProps = {
  title: string;
  description: string;
  badge: string;
  href: string;
  theme: 'studio' | 'lab' | 'street';
  delay?: number;
};

const themeMap: Record<WorldCardProps['theme'], { bg: string; text: string }> = {
  studio: { bg: 'from-studio-light to-studio-dark', text: 'text-studio-dark' },
  lab: { bg: 'from-lab-base to-lab-magenta', text: 'text-lab-neon' },
  street: { bg: 'from-street-base to-street-muted', text: 'text-street-accent' }
};

/**
 * WorldCard teases the different themed worlds on the intro page.
 */
export default function WorldCard({ title, description, badge, href, theme, delay = 0 }: WorldCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ rotateX: 6, rotateY: -6, y: -10 }}
      className="group cursor-peek rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm transition"
    >
      <div
        className={`rounded-2xl bg-gradient-to-br ${themeMap[theme].bg} p-6 text-left shadow-glow transition group-hover:shadow-2xl`}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">{badge}</p>
        <h3 className={`mt-4 text-3xl font-display ${themeMap[theme].text}`}>{title}</h3>
        <p className="mt-2 text-white/80">{description}</p>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white">
          View world →
        </Link>
      </div>
    </motion.article>
  );
}
