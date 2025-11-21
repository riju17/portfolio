'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Photo } from '@/data/photos';
import PhotoGallery from '@/components/PhotoGallery';

type Props = {
  photos: Photo[];
};

/**
 * StreetPage showcases the photography gallery & services.
 */
export default function StreetPage({ photos }: Props) {
  const fallbackHeroImages = useMemo(
    () => [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80'
    ],
    []
  );
  const heroImages = useMemo(() => {
    const provided = photos.filter((photo) => Boolean(photo.src)).map((photo) => photo.src);
    return provided.length > 0 ? provided : fallbackHeroImages;
  }, [photos, fallbackHeroImages]);
  const hasHeroImages = heroImages.length > 0;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!hasHeroImages) return;
    const id = setInterval(() => setIndex((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, [hasHeroImages, heroImages.length]);

  return (
    <div className="min-h-screen bg-street-base text-white">
      <div className="relative h-[60vh] overflow-hidden">
        {hasHeroImages ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImages[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-street-base via-[#111a15] to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-street-base" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-4 pb-12 md:px-6">
          <p className="text-sm uppercase tracking-[0.6em] text-street-accent">World IV</p>
          <h1 className="text-5xl font-display">Street</h1>
          <p className="mt-4 text-lg text-white/80 max-w-3xl">
            Cinematic wanderings capturing people, places, and stolen seconds across neon cities and humid coastlines.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 space-y-12">
        <PhotoGallery photos={photos} />

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
          <h3 className="text-3xl font-display">Services & gigs</h3>
          <p className="mt-2 text-white/70">
            Available for portrait sessions, tour diaries, editorial shoots, and creative brand storytelling.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {['Portraits', 'Events', 'Brand shoots', 'Travel docs'].map((service) => (
              <span key={service} className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em]">
                {service}
              </span>
            ))}
          </div>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-street-accent">
            Book a shoot →
          </Link>
        </section>
      </div>
    </div>
  );
}
