'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';
import Tag from './Tag';

type Props = {
  client: Client;
};

/**
 * ClientCaseHero renders the hero block for a studio case study.
 */
export default function ClientCaseHero({ client }: Props) {
  return (
    <section className="space-y-6 rounded-3xl bg-studio-light/60 p-8 shadow-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 md:grid-cols-2"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-black/60">Client</p>
          <h1 className="mt-3 text-4xl font-display text-black">{client.name}</h1>
          <p className="mt-2 text-lg text-black/70">{client.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {client.services.map((service) => (
              <Tag key={service} tone="dark">
                {service}
              </Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-black/60">
            <div>
              <p className="uppercase tracking-[0.3em]">Year</p>
              <p className="text-lg text-black">{client.year}</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.3em]">Tools</p>
              <p className="text-lg text-black">{client.tools.join(', ')}</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full bg-white/60">
          {client.heroImage ? (
            <Image
              src={client.heroImage}
              fill
              className="object-cover"
              alt={`${client.name} hero`}
              sizes="256px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-center text-sm text-black/50">
              Drop a hero image path in <code className="text-xs">data/clients.ts</code>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
