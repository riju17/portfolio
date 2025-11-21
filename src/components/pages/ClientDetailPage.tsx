'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { Client } from '@/data/clients';
import ClientCaseHero from '@/components/ClientCaseHero';

type Props = {
  client: Client;
};

type AlbumType = 'pattern' | 'icon';
type AlbumConfig = {
  items: NonNullable<Client['patternSystemAlbum']>;
  title: string;
  helper: string;
};

/**
 * ClientDetailPage bundles the branding kit viewer pieces.
 */
export default function ClientDetailPage({ client }: Props) {
  const [activeAlbum, setActiveAlbum] = useState<AlbumType | null>(null);
  const [activeMockupGroup, setActiveMockupGroup] = useState<{
    title: string;
    items: { title?: string; label?: string; src: string }[];
  } | null>(null);
  const [focusedAsset, setFocusedAsset] = useState<{ heading: string; label: string; src: string } | null>(null);
  const patternAlbum = client.patternSystemAlbum ?? [];
  const iconBadgeAlbum = client.iconBadgeAlbum ?? [];
  const albumConfig: Record<AlbumType, AlbumConfig> = {
    pattern: {
      items: patternAlbum,
      title: 'Pattern System Album',
      helper: 'Tap any card to inspect the individual motifs powering the system.'
    },
    icon: {
      items: iconBadgeAlbum,
      title: 'Icon & Badge Album',
      helper: 'Zoom into the crest variations used for avatars, stamps, and badges.'
    }
  };
  const hasAlbum = (album: AlbumType) => albumConfig[album].items.length > 0;
  const activeAlbumConfig = activeAlbum ? albumConfig[activeAlbum] : null;

  return (
    <div className="bg-studio-light min-h-screen text-black">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 space-y-12">
        <ClientCaseHero client={client} />

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/80 p-6">
            <h3 className="text-2xl font-display">Color palette</h3>
            <div className="mt-4 grid gap-4">
              {client.palette.map((color) => (
                <div key={color.hex} className="flex items-center justify-between rounded-2xl border border-black/5 p-4">
                  <span className="text-lg font-semibold">{color.name}</span>
                  <span>{color.hex}</span>
                  <span className="h-10 w-10 rounded-full" style={{ background: color.hex }} />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/80 p-6">
            <h3 className="text-2xl font-display">Typography</h3>
            <div className="mt-4 space-y-4">
              {client.typography.map((type) => (
                <div key={type.label}>
                  <p className="text-sm uppercase tracking-[0.3em] text-black/50">{type.label}</p>
                  <p className="text-3xl font-display">{type.sample}</p>
                  <p className="text-sm text-black/60">{type.family}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-display">Logo & Assets</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {client.logos.map((logo) => {
              let albumType: AlbumType | null = null;
              const labelLower = logo.label.toLowerCase();
              if (hasAlbum('pattern') && labelLower.includes('pattern')) albumType = 'pattern';
              if (!albumType && hasAlbum('icon') && (labelLower.includes('icon') || labelLower.includes('badge'))) {
                albumType = 'icon';
              }
              const previewSrc = albumType ? albumConfig[albumType].items[0]?.src : undefined;
              const handleOpen = () => {
                if (albumType) {
                  setActiveAlbum(albumType);
                } else if (logo.src) {
                  setFocusedAsset({ heading: `${logo.label}`, label: logo.label, src: logo.src });
                }
              };
              return (
                <motion.div
                  key={logo.label}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl bg-white/80 p-4"
                  role={albumType || logo.src ? 'button' : undefined}
                  tabIndex={albumType || logo.src ? 0 : undefined}
                  onClick={albumType || logo.src ? handleOpen : undefined}
                  onKeyDown={
                    albumType || logo.src
                      ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            handleOpen();
                          }
                        }
                      : undefined
                  }
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-black/50">{logo.label}</p>
                  <div className="relative mt-3 aspect-video overflow-hidden rounded-xl">
                    {albumType && previewSrc ? (
                      <Image src={previewSrc} alt={`${logo.label} preview`} fill className="object-cover" sizes="300px" />
                    ) : logo.src ? (
                      <Image src={logo.src} alt={logo.label} fill className="object-cover" sizes="300px" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-black/5 text-xs uppercase tracking-[0.3em] text-black/40">
                        Upload logo
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-display">Mockups & deliverables</h3>
          {client.mockupGroups && client.mockupGroups.length ? (
            <div className="grid gap-6 md:grid-cols-3">
              {client.mockupGroups.map((group) => {
                const preview = group.items.find((item) => item.src)?.src;
                return (
                  <motion.div
                    key={group.title}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-2xl bg-white/80 p-4"
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveMockupGroup(group)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveMockupGroup(group);
                      }
                    }}
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-black/50">{group.title}</p>
                    <div className="relative mt-3 aspect-video overflow-hidden rounded-xl">
                      {preview ? (
                        <Image src={preview} alt={`${group.title} preview`} fill className="object-cover" sizes="300px" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-black/5 text-xs uppercase tracking-[0.3em] text-black/40">
                          Upload preview
                        </div>
                      )}
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.3em] text-black/40">{group.items.length} assets</p>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {client.mockups.map((mockup) => (
                <button
                  key={mockup.title}
                  type="button"
                  className="rounded-2xl border border-black/10 bg-white/80 p-4 text-left"
                  onClick={mockup.src ? () => setFocusedAsset({ heading: 'Mockup', label: mockup.title, src: mockup.src! }) : undefined}
                  disabled={!mockup.src}
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-black/50">{mockup.title}</p>
                  <div className="relative mt-3 aspect-video overflow-hidden rounded-xl">
                    {mockup.src ? (
                      <Image src={mockup.src} alt={mockup.title} fill className="object-cover" sizes="300px" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-black/5 text-xs uppercase tracking-[0.3em] text-black/40">
                        Upload mockup
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4 rounded-3xl bg-white/80 p-6">
          <h3 className="text-2xl font-display">Project story</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: 'Context', content: [client.story.context] },
              { label: 'Challenge', content: [client.story.challenge] },
              { label: 'Approach', content: client.story.approach.split('\n') },
              { label: 'Outcome', content: [client.story.outcome] }
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm uppercase tracking-[0.4em] text-black/50">{item.label}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    Hover to read
                  </span>
                </div>
                <div className="mt-3 max-h-32 overflow-hidden pr-2 text-black/80 text-justify transition-all duration-300 group-hover:max-h-[420px] group-hover:overflow-y-auto">
                  {item.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <AnimatePresence>
        {activeAlbumConfig && activeAlbumConfig.items.length ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveAlbum(null)}
          >
            <motion.div
              className="relative max-h-full w-full max-w-5xl overflow-y-auto rounded-3xl bg-white/95 p-6 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-black/50">{client.name}</p>
                  <h3 className="text-3xl font-display">{activeAlbumConfig.title}</h3>
                  <p className="text-black/70">{activeAlbumConfig.helper}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveAlbum(null)}
                  className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black/70 transition hover:bg-black/5"
                >
                  Close
                </button>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {activeAlbumConfig.items.map((pattern) => (
                  <div key={pattern.label} className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm">
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image src={pattern.src} alt={pattern.label} fill className="object-cover" sizes="480px" />
                    </div>
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-black/50">{pattern.label}</p>
                    <p className="text-sm text-black/70">{pattern.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeMockupGroup ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMockupGroup(null)}
          >
            <motion.div
              className="relative max-h-full w-full max-w-5xl overflow-y-auto rounded-3xl bg-white/95 p-6 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-black/50">{client.name}</p>
                  <h3 className="text-3xl font-display">{activeMockupGroup.title}</h3>
                  <p className="text-black/70">Browse every asset inside this deliverable set.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveMockupGroup(null)}
                  className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black/70 transition hover:bg-black/5"
                >
                  Close
                </button>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {activeMockupGroup.items.map((item) => (
                  <button
                    key={item.title ?? item.label ?? item.src}
                    type="button"
                    className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm text-left"
                    onClick={item.src ? () => setFocusedAsset({ heading: activeMockupGroup.title, label: item.title ?? item.label ?? activeMockupGroup.title, src: item.src }) : undefined}
                    disabled={!item.src}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      {item.src ? (
                        <Image src={item.src} alt={item.title ?? item.label ?? activeMockupGroup.title} fill className="object-cover" sizes="480px" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-black/5 text-xs uppercase tracking-[0.3em] text-black/40">
                          Upload image
                        </div>
                      )}
                    </div>
                    <p className="mt-3 text-sm font-semibold">{item.title ?? item.label ?? activeMockupGroup.title}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {focusedAsset ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFocusedAsset(null)}
          >
            <motion.div
              className="relative max-h-full w-full max-w-3xl overflow-hidden rounded-3xl bg-white p-6 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-black/50">{focusedAsset.heading}</p>
                  <h3 className="text-3xl font-display">{focusedAsset.label}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setFocusedAsset(null)}
                  className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black/70 transition hover:bg-black/5"
                >
                  Close
                </button>
              </div>
              <div className="relative mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-black/10 bg-white">
                <Image src={focusedAsset.src} alt={focusedAsset.label} fill className="object-contain p-4" sizes="600px" />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
