'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
};

/**
 * ProjectCard styles Lab projects like neon arcade cartridges.
 */
export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ rotateX: 8, rotateY: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl neon-frame bg-gradient-to-br from-[#f5f7fa] via-[#d7dbe4] to-[#adb4c4] p-6 text-[#0b1424] shadow-[0_20px_55px_rgba(96,165,250,0.25)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#090c16] via-[#11162b] to-[#1b2440] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-[#4c5c79] transition group-hover:text-white/70">
        <span>{project.genre}</span>
        <span>{project.status}</span>
      </div>
      <h3 className="mt-4 text-2xl font-display text-[#1b2436] transition group-hover:text-white">{project.title}</h3>
      <p className="mt-2 text-[#4f5b76] transition group-hover:text-white/80">{project.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#354058] transition group-hover:text-white/70">
        {project.techStack.map((stack) => (
          <span key={stack} className="rounded-full border border-[#9aa5bd]/60 bg-white/40 px-3 py-1 transition group-hover:border-white/40 group-hover:bg-white/10">
            {stack}
          </span>
        ))}
      </div>
      <Link
        href={`/lab/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-[#2563eb] transition group-hover:text-white"
      >
        View mission →
      </Link>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-10 h-24 w-24 rounded-full bg-gradient-to-r from-white/70 to-[#8fb3ff]/60 blur-[70px]"
        animate={{ opacity: [0.15, 0.4, 0.15], scale: [0.8, 1.05, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.article>
  );
}
