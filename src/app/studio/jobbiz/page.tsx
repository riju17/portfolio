import Link from 'next/link';
import ZoomableBoard from '../sports-highlights/ZoomableBoard';

export const metadata = {
  title: 'Jobbiz — UI Case Study'
};

export default function JobbizPage() {
  return (
    <div className="studio-coral-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-14 text-white md:px-6 md:py-16">
        <div className="studio-coral-card rounded-3xl p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">Case study</p>
          <h1 className="mt-3 text-4xl font-display">Jobbiz</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            A streamlined job search and application hub. Add your narrative, goals, and outcomes here.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
            <span className="rounded-full border border-white/15 px-3 py-1">Product</span>
            <span className="rounded-full border border-white/15 px-3 py-1">UI/UX</span>
            <span className="rounded-full border border-white/15 px-3 py-1">Mobile</span>
          </div>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">About the project</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Use this block to describe the problem space, target users, and your design intent for Jobbiz.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Motivation</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Capture your objectives, constraints, and success metrics. Swap this placeholder with your copy.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Sample design</p>
              <h3 className="text-2xl font-display">Screen preview</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll and zoom inside the frame</p>
          </div>
          <ZoomableBoard
            images={[
              {
                src: '/UIUX/jobbiz/jobbiz.png',
                alt: 'Jobbiz mockup',
                width: 1600,
                height: 3200,
                priority: true
              }
            ]}
            initialScale={1}
          />
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">What to add</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/70">
              <li>• User stories and primary flows.</li>
              <li>• Key UI patterns and states.</li>
              <li>• Metrics, learnings, next steps.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Next steps</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Replace placeholders with your detailed narrative, add additional screens or flows, and link to prototypes if available.
            </p>
            <Link href="/contact" className="mt-4 inline-flex text-sm uppercase tracking-[0.3em] text-street-accent">
              Book a design review →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
