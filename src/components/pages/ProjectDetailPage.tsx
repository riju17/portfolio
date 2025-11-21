'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import ProjectDetailLayout from '@/components/ProjectDetailLayout';

type Props = {
  project: Project;
};

/**
 * ProjectDetailPage renders Lab mission briefings.
 */
export default function ProjectDetailPage({ project }: Props) {
  const gallery = project.gallery.filter(Boolean);
  return (
    <div className="min-h-screen bg-lab-base text-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-5xl space-y-10">
        <ProjectDetailLayout project={project}>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="neon-frame rounded-2xl bg-white/5 p-6"
            >
              <h3 className="text-xl font-display text-lab-neon">Objective</h3>
              <p className="mt-2 text-white/70">{project.objective}</p>
              <h3 className="mt-6 text-xl font-display text-lab-neon">Approach</h3>
              <p className="mt-2 text-white/70">{project.approach}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="neon-frame rounded-2xl bg-white/5 p-6"
            >
              <h3 className="text-xl font-display text-lab-neon">Architecture</h3>
              <p className="mt-2 text-white/70">{project.architecture}</p>
              <h3 className="mt-6 text-xl font-display text-lab-neon">My role</h3>
              <p className="mt-2 text-white/70">{project.role}</p>
            </motion.div>
          </div>
          <section className="neon-frame rounded-2xl bg-white/5 p-6">
            <h3 className="text-xl font-display text-lab-neon">Highlights</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
          <section className="neon-frame rounded-2xl bg-white/5 p-6">
            <h3 className="text-xl font-display text-lab-neon">Architecture diagram</h3>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.3em] text-white/70">
              {['Sensors', 'Edge Gateway', 'Mission Core', 'UI'].map((node, index) => (
                <div key={node} className="flex items-center gap-4">
                  <div className="rounded-2xl border border-lab-neon/40 px-4 py-2 text-white">{node}</div>
                  {index < 3 && <span className="text-lab-neon text-2xl">→</span>}
                </div>
              ))}
            </div>
          </section>
          <section className="grid gap-6 md:grid-cols-2">
            {gallery.length > 0 ? (
              gallery.map((image) => (
                <motion.div key={image} whileHover={{ scale: 1.02 }} className="neon-frame relative aspect-video overflow-hidden rounded-2xl">
                  <Image src={image} alt={project.title} fill className="object-cover" sizes="50vw" />
                </motion.div>
              ))
            ) : (
              <div className="neon-frame rounded-2xl bg-white/5 p-6 text-sm uppercase tracking-[0.3em] text-white/50">
                Add gallery shots in <code className="text-xs">data/projects.ts</code>
              </div>
            )}
          </section>
        </ProjectDetailLayout>
      </div>
    </div>
  );
}
