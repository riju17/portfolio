'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import ProjectDetailLayout from '@/components/ProjectDetailLayout';
import ArchitectureMermaid from '@/app/components/ArchitectureMermaid';
import BooktrakerArchitecture from '@/app/components/BooktrakerArchitecture';
import WingedWonderArchitecture from '@/app/components/WingedWonderArchitecture';
import IslArchitecture from '@/app/components/IslArchitecture';
import ElderlyCareArchitecture from '@/app/components/ElderlyCareArchitecture';

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
            {project.slug === 'the-food-crew' ? (
              <div className="mt-6">
                <ArchitectureMermaid />
              </div>
            ) : project.slug === 'booktraker' ? (
              <div className="mt-6">
                <BooktrakerArchitecture />
              </div>
            ) : project.slug === 'postcards' ? (
              <div className="mt-6">
                <WingedWonderArchitecture />
              </div>
            ) : project.slug === 'indian-sign-language-mlpfnn' ? (
              <div className="mt-6">
                <IslArchitecture />
              </div>
            ) : project.slug === 'elderly-care-app' ? (
              <div className="mt-6">
                <ElderlyCareArchitecture />
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                {(project.architectureDiagram ?? [['Sensors', 'Edge Gateway', 'Mission Core', 'UI']]).map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-3 text-sm uppercase tracking-[0.25em] text-white/80"
                  >
                    {row.map((node, index) => (
                      <div key={`${rowIndex}-${node}-${index}`} className="flex items-center gap-3">
                        <div className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-white shadow-[0_0_18px_rgba(0,0,0,0.25)]">
                          {node}
                        </div>
                        {index < row.length - 1 && (
                          <div className="flex items-center gap-2 text-white/60">
                            <div className="h-px w-10 bg-white/30" />
                            <span className="text-base">➝</span>
                            <div className="h-px w-10 bg-white/30" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
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
