'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Intro' },
  { href: '/studio', label: 'Studio' },
  { href: '/lab', label: 'Lab' },
  { href: '/street', label: 'Street' },
  { href: '/contact', label: 'Contact' }
];

type HeaderProps = {
  currentPath: string;
};

/**
 * Header renders the global navigation with desktop links and a mobile overlay menu.
 */
export default function Header({ currentPath }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-base/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-2xl font-display tracking-tight uppercase text-white">
          Riju
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] md:flex">
          {navLinks.map((link) => {
            const isActive = currentPath?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/60'}`}
              >
                {link.label}
                {isActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-white" />}
              </Link>
            );
          })}
        </nav>
        <button
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`}
          />
          <span className={`block h-0.5 w-5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-base/95 px-8 py-24 text-center"
          >
            <div className="flex flex-col items-center gap-8 text-3xl font-display">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-white/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
