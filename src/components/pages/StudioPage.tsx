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
  { name: 'MPt20', logo: '/MPt20.webp' },
  { name: 'Sportify 2165', logo: '/Besportify.jpg' },
  { name: "Dev's Cricket Academy", logo: '/Devs.JPEG' },
  { name: 'StatStrike', logo: '/Statstr.JPG' },
  { name: 'Sillynions', logo: '' },
  { name: 'Birdbook Podcast', logo: '/Birdbook.JPG' }
];
const rosterPositions = [
  { top: '5%', left: '8%' },
  { top: '12%', left: '32%' },
  { top: '6%', left: '62%' },
  { top: '18%', left: '80%' },
  { top: '40%', left: '12%' },
  { top: '35%', left: '46%' },
  { top: '40%', left: '74%' },
  { top: '64%', left: '18%' },
  { top: '68%', left: '48%' },
  { top: '60%', left: '78%' }
];
const rosterSizes = [220, 200, 240, 180, 230, 210, 190, 230, 200, 220];

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
                className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-lg"
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
          <div className="relative h-[760px] w-full overflow-hidden pb-24" style={{ perspective: '1600px' }}>
            {rosterLogos.map((item, idx) => {
              const pos = rosterPositions[idx % rosterPositions.length];
              const size = rosterSizes[idx % rosterSizes.length];
              const duration = 12 + (idx % 5);
              const xOffset = idx % 2 === 0 ? 28 : -28;
              return (
                <motion.div
                  key={item.name}
                  initial={{ y: 0, x: 0 }}
                  animate={{
                    y: [-24, 24],
                    x: [0, xOffset],
                    rotateX: idx % 2 === 0 ? [-8, 8] : [6, -6],
                    rotateY: idx % 2 === 0 ? [12, -12] : [-12, 12],
                    rotateZ: [-2, 2]
                  }}
                  whileHover={{ rotateX: -4, rotateY: 4, scale: 1.02 }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: idx * 0.4
                  }}
                  className="absolute flex items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-white/90 via-[#f4f1e9]/85 to-white/70 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)] ring-2 ring-white/40"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    width: size,
                    height: size,
                    backdropFilter: 'blur(6px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {item.logo ? (
                    <Image src={item.logo} alt={item.name} width={size} height={size} className="object-contain" />
                  ) : (
                    <span className="text-base font-semibold uppercase tracking-[0.3em] text-black/60">
                      {item.name.split(' ')[0]}
                    </span>
                  )}
                </motion.div>
              );
            })}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
              <div className="absolute left-5 top-8 h-32 w-32 rounded-full bg-sky-100/40 blur-3xl" />
              <div className="absolute right-10 bottom-4 h-48 w-48 rounded-full bg-emerald-100/40 blur-[70px]" />
              <div className="absolute left-1/3 bottom-10 h-36 w-36 rounded-full bg-amber-100/40 blur-[60px]" />
              <div className="absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-pink-100/40 blur-[70px]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
