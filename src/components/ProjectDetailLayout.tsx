'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
  children: React.ReactNode;
};

/**
 * ProjectDetailLayout builds the mission briefing hero & meta block.
 */
export default function ProjectDetailLayout({ project, children }: Props) {
  return (
    <section className="neon-frame space-y-10 rounded-3xl bg-gradient-to-br from-black to-lab-base/70 p-8 text-white">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-xs uppercase tracking-[0.7em] text-lab-neon">Mission</p>
        <h1 className="text-4xl font-display">{project.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-white/70">
          <span className="rounded-full border border-white/20 px-3 py-1 uppercase tracking-widest">
            {project.genre}
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 uppercase tracking-widest">
            Difficulty: {project.difficulty}
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 uppercase tracking-widest">
            {project.status}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-white/60">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded bg-white/5 px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-lab-neon px-5 py-2 text-sm font-semibold uppercase tracking-wide text-black"
          >
            View on GitHub
          </Link>
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm uppercase tracking-wide"
            >
              Live demo
            </Link>
          )}
        </div>
      </motion.header>
      {children}
    </section>
  );
}
