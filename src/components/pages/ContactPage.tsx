'use client';

import AnimatedButton from '@/components/AnimatedButton';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * ContactPage culminates with a blended gradient card & CTAs.
 */
export default function ContactPage() {
  const socials = [
    { label: 'Email', href: 'mailto:riju.patidar@yahoo.com', detail: 'riju.patidar@yahoo.com' },
    { label: 'Instagram', href: 'https://www.instagram.com/whyrijuwhy', detail: '@whyrijuwhy' },
    { label: 'GitHub', href: 'https://github.com/riju17', detail: 'github.com/riju17' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/riju-patidar-6720a9253', detail: 'linkedin.com/in/riju-patidar-6720a9253' },
    { label: 'Blog', href: 'https://badmintonsportify.blogspot.com', detail: 'badmintonsportify.blogspot.com' },
    { label: 'YouTube', href: 'https://www.youtube.com/@sportifybadminton1078', detail: '@sportifybadminton1078' }
  ];
  const focusAreas = ['Creative direction', 'Rapid prototyping', 'Sports visuals', 'Brand systems'];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7f0] via-[#f2f6ff] to-[#f7fbff] text-black">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-rose-200/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-32 w-32 -translate-x-1/2 rounded-full border border-black/5" />
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.4em] text-black/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
                Portal open
              </div>
              <h1 className="text-4xl font-display leading-tight text-black sm:text-5xl">
                Let’s make something weird, tactile, and memorable together.
              </h1>
              <p className="text-lg text-black/70">
                I craft brand worlds, motion-led product moments, and sport-inspired visuals. Drop a note with your idea, and I’ll
                plot a route from first sketch to final launch.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {focusAreas.map((item) => (
                  <span key={item} className="rounded-full border border-black/5 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-black/70">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <AnimatedButton href="mailto:riju.patidar@yahoo.com">Start with email</AnimatedButton>
                <AnimatedButton href="https://www.instagram.com/whyrijuwhy" variant="secondary">
                  DM on Instagram
                </AnimatedButton>
              </div>
              <div className="relative mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-end sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-64 overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-72 sm:flex-1"
                >
                  <Image
                    src="/Riju/IMG_2316%202.PNG"
                    alt="Riju laughing outdoors"
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute left-4 bottom-4 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-black/70">
                    Field note
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 }}
                  className="relative h-52 w-5/6 self-end overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:h-64 sm:w-2/5"
                >
                  <Image
                    src="/Riju/IMG_2317%202.PNG"
                    alt="Portrait of Riju with a playful pose"
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute right-3 top-3 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-black/70">
                    Portrait
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-inner shadow-black/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-black/50">Signals</p>
                  <p className="text-xl font-display text-black">Pick your channel</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Always on</span>
              </div>
              <div className="divide-y divide-black/5">
                {socials.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 py-3 transition hover:translate-x-1 hover:text-emerald-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.25 }}
                  >
                    <div className="space-y-1">
                      <p className="text-sm uppercase tracking-[0.3em] text-black/50">{social.label}</p>
                      <p className="text-base text-black">{social.detail}</p>
                    </div>
                    <span className="text-lg">↗</span>
                  </motion.a>
                ))}
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/80 p-4 text-sm text-black/70">
                Mention “bougey” in your note so I know you found the portal. Looking forward to plotting something bold.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
