'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import AnimatedButton from '@/components/AnimatedButton';

type Props = {
  projects: Project[];
};

/**
 * LabPage turns engineering projects into an arcade grid with filters.
 */
export default function LabPage({ projects }: Props) {
  const [activeGenre, setActiveGenre] = useState('All');

  const genres = useMemo(() => {
    const uniqueGenres = Array.from(new Set(projects.map((project) => project.genre)));
    return ['All', ...uniqueGenres];
  }, [projects]);
  const filtered = useMemo(
    () => (activeGenre === 'All' ? projects : projects.filter((project) => project.genre === activeGenre)),
    [activeGenre, projects]
  );

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(15,76,129,0.35), transparent 45%), radial-gradient(circle at 80% 12%, rgba(4,34,74,0.5), transparent 40%), radial-gradient(circle at 60% 70%, rgba(10,35,54,0.55), transparent 45%), radial-gradient(circle at 12% 70%, rgba(3,56,94,0.3), transparent 45%), linear-gradient(140deg, #01030a, #020b1f 55%, #01020a)'
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 space-y-12">
        <section className="neon-frame rounded-3xl bg-gradient-to-br from-[#f5f7fa] via-[#d7dbe4] to-[#adb4c4] p-10 text-[#0b1424] shadow-[0_0_60px_rgba(19,25,40,0.35)]">
          <p className="text-sm uppercase tracking-[0.6em] text-[#2563eb]">World III</p>
          <h1 className="mt-4 text-5xl font-display text-[#1b2436]">The Lab</h1>
          <p className="mt-4 text-lg text-[#4f5b76] max-w-2xl">
            Technical experiments disguised as arcade missions. Edge compute, creative tooling, AI adventures, all with a hint of neon drama.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <AnimatedButton href="#missions" variant="primary">
              Browse missions
            </AnimatedButton>
            <AnimatedButton href="https://github.com/riju17" variant="secondary">
              View GitHub
            </AnimatedButton>
          </div>
        </section>

        <section id="missions" className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] ${activeGenre === genre ? 'bg-lab-neon text-black' : 'bg-white/5 text-white/60'}`}
                data-hoverable="true"
              >
                {genre}
              </button>
            ))}
          </div>
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
