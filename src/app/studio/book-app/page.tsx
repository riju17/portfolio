import Link from 'next/link';
import MobileVideoPlayer from '@/components/MobileVideoPlayer';

export const metadata = {
  title: 'Book App — Case Study'
};

export default function BookAppPage() {
  return (
    <div className="studio-coral-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-14 text-white md:px-6 md:py-16">
        <div className="studio-coral-card rounded-3xl p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">Case study</p>
          <h1 className="mt-3 text-4xl font-display">Book Tracking App</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            A reading companion that makes logging books feel delightful—mood shelves, quotes, stats, and social sharing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
            <span className="rounded-full border border-white/15 px-3 py-1">Product design</span>
            <span className="rounded-full border border-white/15 px-3 py-1">UI kit</span>
            <span className="rounded-full border border-white/15 px-3 py-1">Frontend</span>
          </div>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">About the project</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Log books, capture quotes, and visualize reading trends without spreadsheet vibes. Designed around tactile cards, soft gradients, and
              micro-interactions.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Motivation</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Most trackers feel utilitarian. This one leans cozy and expressive to keep readers motivated and proud of their shelf.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-display">Wireframe & structure</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-black">
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Home: current read, mood shelf, streak.
            </div>
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Book detail: progress, highlights, notes, quote capture.
            </div>
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Stats: genre mix, pages/day, habits, export/share.
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Watch</p>
              <h3 className="text-2xl font-display">Iphone Preview (hover to play)</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Video stays paused until hover</p>
          </div>
          <div className="grid gap-6 md:grid-cols-[0.6fr_1fr] items-start">
            <div className="device-mobile">
              <MobileVideoPlayer src="/bookapp.mov" />
              <div className="device-mobile-base" />
            </div>
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-5 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70 text-sm leading-relaxed">
              <h4 className="text-xl font-display text-black">Playback notes</h4>
              <p className="mt-2">
                Hover to play the mobile demo. The clip restarts on exit to make repeat viewing easy without UI chrome.
              </p>
              <p className="mt-3">
                Add quick bullets: shelf UI, quote capture, streak stats, and social share. Include runtime and stack notes once finalized.
              </p>
            </div>
          </div>
          <p className="text-xs text-white/60">Replace the video source with your Book App demo (drop the file in /public and update the path).</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">What to add</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/70">
              <li>• High-fidelity screens: onboarding, shelf, book detail, stats.</li>
              <li>• Design tokens: typography, colors, cards, buttons, inputs.</li>
              <li>• Metrics: streak retention, books logged/month, quote saves.</li>
              <li>• Tech: stack (Next.js/Supabase), offline plan, sync approach.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Next steps</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Add your long-scroll mockup between sections if desired. Need hover-to-scroll storyboard? Export a tall JPG and we’ll embed it.
            </p>
            <Link href="/contact" className="mt-4 inline-flex text-sm uppercase tracking-[0.3em] text-street-accent">
              Talk book app UX →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
