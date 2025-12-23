import Link from 'next/link';
import Image from 'next/image';
import ZoomableBoard from './ZoomableBoard';

export const metadata = {
  title: 'Sports Highlights — Case Study'
};

/**
 * Sports Highlights case study: narrative sections plus a MacBook-framed video that plays on hover.
 */
export default function SportsHighlightsPage() {
  return (
    <div className="studio-coral-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-14 text-white md:px-6 md:py-16">
        <div className="studio-coral-card rounded-3xl p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">Case study</p>
          <h1 className="mt-3 text-4xl font-display">Sports Highlights Reel</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            A kinetic sports recap that blends fast cuts, scoreboard overlays, and court-side audio to keep viewers locked in.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
            <span className="rounded-full border border-white/15 px-3 py-1">Editing</span>
            <span className="rounded-full border border-white/15 px-3 py-1">Sound design</span>
            <span className="rounded-full border border-white/15 px-3 py-1">Motion</span>
          </div>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">About the project</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Cut from raw match footage and crowd B-roll into a high-energy recap. The goal: help the club hype upcoming fixtures and excite fans
              on socials and in-stadium screens.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Motivation</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Elevate grassroots sports footage into a premium-feel trailer using rhythm, typography, and color grading—without heavy VFX budgets.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-display">Wireframe & structure</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-black">
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Hook: cold open, bass hit, scoreboard pop.
            </div>
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Mid: combo of close-ups + crowd, overlay stats, beat-matched cuts.
            </div>
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Outro: logo sting, CTA to next match, slow fade with chant audio.
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Watch</p>
              <h3 className="text-2xl font-display">Sample design</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Scroll to explore the layout</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-[0_18px_40px_rgba(240,80,120,0.18)] backdrop-blur">
            <div className="relative mx-auto max-w-4xl h-[70vh] max-h-[820px] overflow-hidden rounded-xl border border-white/10 bg-black/10">
              <div className="h-full overflow-y-auto">
                <Image
                  src="/UIUX/Sportify/Sportify%20main.jpg"
                  alt="Sportify storyboard scroll"
                  width={1600}
                  height={3200}
                  className="h-auto w-full rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
          <p className="text-xs text-white/60">Tip: Swap /UIUX/Sportify/Sportify%20main.jpg in public/ with any updated scroll.</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">What to add</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/70">
              <li>• Key specs: length, frame rate, color grade, tools (e.g., Premiere, After Effects).</li>
              <li>• Before/after frames to show grading and typography polish.</li>
              <li>• Metrics: watch time, social engagement, ticket uplift.</li>
              <li>• CTA buttons: download press kit, share link, or view storyboard.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Next steps</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Swap placeholder copy with your narrative, drop in wireframe images, and add any long-form scroll assets. Need a scroll-on-hover
              storyboard? Export a tall JPG from Figma and we can slot it between sections.
            </p>
            <Link href="/contact" className="mt-4 inline-flex text-sm uppercase tracking-[0.3em] text-street-accent">
              Book a launch edit →
            </Link>
          </div>
        </section>

        <section className="mt-16 space-y-4">
          <h3 className="text-2xl font-display text-white">Complete mockup</h3>
          <p className="text-white/70 text-sm">Pinned board view — scroll inside the frame to review the full mockup.</p>
          <ZoomableBoard
            images={[
              {
                src: '/UIUX/Sportify/Section 1.png',
                alt: 'Sport management mockup section 1',
                width: 1600,
                height: 2000
              }
            ]}
          />
        </section>
      </div>
    </div>
  );
}
