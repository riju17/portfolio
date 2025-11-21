import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import Layout from '@/components/Layout';

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display'
});

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: {
    default: 'Riju — Multiverse Portfolio',
    template: '%s · Riju Multiverse'
  },
  description: 'Bougey multiverse studio blending creative direction, engineering experiments and street photography.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Riju — Multiverse Portfolio',
    description: 'Creative studio, sci-fi lab, photography street world all in one portal.',
    url: 'https://example.com',
    siteName: 'Riju Multiverse',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Riju Multiverse preview'
      }
    ],
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
