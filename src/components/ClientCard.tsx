'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';

type ClientCardProps = {
  client: Client;
};

/**
 * ClientCard displays Studio project previews with hover interactions.
 */
export default function ClientCard({ client }: ClientCardProps) {
  const initials = client.name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className="rounded-3xl border border-black/10 bg-white/70 p-6 text-black shadow-lg transition hover:bg-white"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
          {client.logos?.[0]?.src ? (
            <Image src={client.logos[0].src} alt={`${client.name} logo`} width={48} height={48} className="object-contain" />
          ) : (
            <span className="text-xs font-semibold uppercase tracking-wide text-black/60">{initials}</span>
          )}
        </div>
        <div>
          <h3 className="text-xl font-display">{client.name}</h3>
          <p className="text-sm text-black/60">{client.shortDescription}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-black/60">
        {client.services.map((service) => (
          <span key={service} className="rounded-full bg-black/5 px-3 py-1">
            {service}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="font-semibold">{client.year}</span>
        <Link href={`/studio/${client.slug}`} className="text-black/70 transition hover:text-black">
          View case →
        </Link>
      </div>
    </motion.div>
  );
}
