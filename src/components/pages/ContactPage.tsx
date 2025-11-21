'use client';

import AnimatedButton from '@/components/AnimatedButton';
import { motion } from 'framer-motion';

/**
 * ContactPage culminates with a blended gradient card & CTAs.
 */
export default function ContactPage() {
  const socials = [
    { label: 'GitHub', href: 'https://github.com/riju17' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/riju' },
    { label: 'Instagram', href: 'https://instagram.com/riju' },
    { label: 'YouTube', href: 'https://youtube.com/@riju' },
    { label: 'Blog', href: 'https://riju.blog' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-studio-light via-lab-base to-street-base text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-[40px] border border-white/20 bg-black/60 p-10 shadow-2xl backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">Portal Out</p>
          <h1 className="mt-4 text-4xl font-display">Let’s make something weird & wonderful.</h1>
          <p className="mt-4 text-white/80">
            Open to collaborations across design systems, creative technology, immersive installations, and photography journeys.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <AnimatedButton href="mailto:hello@riju.studio">Email me</AnimatedButton>
            <div className="grid gap-3 md:grid-cols-2">
              {socials.map((social) => (
                <AnimatedButton key={social.label} href={social.href} variant="secondary">
                  {social.label}
                </AnimatedButton>
              ))}
            </div>
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <li>@riju.studio</li>
            <li>youtube.com/@riju</li>
            <li>blog: portals.riju</li>
          </ul>
          <p className="mt-8 text-sm text-white/70">Currently open for: creative direction, rapid prototyping, residencies.</p>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-white/60">
            Mention “bougey” in your note so I know you found the portal.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
