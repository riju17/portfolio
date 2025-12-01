'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';
import type { StudioWork } from '@/data/studioWorks';
import ClientCard from '@/components/ClientCard';
import Tag from '@/components/Tag';

type Props = {
  clients: Client[];
  works: StudioWork[];
};

const tags = ['Branding', 'UI/UX', 'Social Media', 'Illustration', 'Art Direction', 'Creative Tech'];
const rosterLogos = [
  { name: 'Kalam Katha', logo: '/kalamkatha.PNG' },
  { name: 'Kala Katha', logo: '/Kala Katha.jpeg' },
  { name: 'Noida Kings', logo: '/NOIDA KINGS_FINAL.png' },
  { name: 'Gwalior Cheetahs', logo: '/Gwalior cheetah.PNG' },
  { name: 'MPt20', logo: '/MPt20.png' },
  { name: 'Sportify 2165', logo: '/Besportify.jpg' },
  { name: "Dev's Cricket Academy", logo: '/Devs.JPEG' },
  { name: 'StatStrike', logo: '/Statstr.JPG' },
  { name: 'Sillynions', logo: '' },
  { name: 'Birdbook Podcast', logo: '/Birdbook.JPG' }
];
const rosterBubbleSize = 140;

/**
 * StudioPage renders the boutique creative world with warm tones.
 */
export default function StudioPage({ clients, works }: Props) {
  return (
    <div className="bg-studio-light text-black">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section className="relative space-y-6 rounded-3xl border border-black/5 bg-white/70 p-8 shadow-lg overflow-hidden">
          <div className="pointer-events-none absolute -right-10 top-6 h-24 w-24 rounded-full border border-black/10" />
          <div className="pointer-events-none absolute left-6 -bottom-10 h-20 w-20 rotate-12 border border-dashed border-black/20" />
          <p className="text-sm uppercase tracking-[0.5em] text-black/50">World I</p>
          <h1 className="text-5xl font-display">Studio</h1>
          <p className="text-lg text-black/70">
            Boutique creative lab shaping brands, digital experiences, and campaigns that feel tactile and luxurious.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Tag key={tag} tone="dark">
                {tag}
              </Tag>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-black/50">Clients</p>
              <h2 className="text-3xl font-display">Selected collaborators</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {clients.map((client) => (
              <ClientCard key={client.slug} client={client} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-black/50">Process</p>
            <h2 className="text-3xl font-display">Discover → Design → Deploy</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Discover',
                description: 'Research sprints, taste workshops, sonic moodboards.'
              },
              {
                title: 'Design',
                description: 'Brand systems, UI kits, 3D mockups, motion explorations.'
              },
              {
                title: 'Deploy',
                description: 'Guidelines, launch art, creative ops automation.'
              }
            ].map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateX: -6, rotateY: 6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <h3 className="text-2xl font-display">{step.title}</h3>
                <p className="mt-2 text-black/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.5em] text-black/50">UI-UX projects</p>
          <div className="space-y-3">
            {works.map((work) => (
              <Link
                key={work.id}
                href={work.link}
                className="group flex items-center justify-between rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-black transition hover:-translate-y-0.5 hover:border-black/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black/60 group-hover:bg-black" />
                  <p className="text-lg font-display">{work.title}</p>
                </div>
                {work.video && (
                  <span className="text-xs uppercase tracking-[0.2em] text-black/60 group-hover:text-black"></span>
                )}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-black/50">Roster</p>
            <h2 className="text-3xl font-display">Companies we’ve collaborated with</h2>
            <p className="text-black/60">Pulled from your client logos above; swap assets in public/ to update.</p>
          </div>
          <div className="grid gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {rosterLogos.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                <div
                  className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-white via-[#f9f5ef] to-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
                  style={{ width: rosterBubbleSize, height: rosterBubbleSize }}
                >
                  <div
                    className="flex items-center justify-center overflow-hidden rounded-full bg-white/90 ring-1 ring-black/5"
                    style={{ width: rosterBubbleSize - 12, height: rosterBubbleSize - 12 }}
                  >
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={(rosterBubbleSize - 24) * (item.name === 'MPt20' ? 1.2 : 1)}
                        height={(rosterBubbleSize - 24) * (item.name === 'MPt20' ? 1.2 : 1)}
                        className="h-full w-full object-contain rounded-full"
                      />
                    ) : (
                      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/60">
                        {item.name.slice(0, 3)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
