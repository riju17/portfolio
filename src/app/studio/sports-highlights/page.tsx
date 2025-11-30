import Link from 'next/link';
import SportsVideoPlayer from '@/components/SportsVideoPlayer';

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
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">About the project</h3>
            <p className="mt-2 text-white/70 leading-relaxed">
              Cut from raw match footage and crowd B-roll into a high-energy recap. The goal: help the club hype upcoming fixtures and excite fans
              on socials and in-stadium screens.
            </p>
          </div>
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">Motivation</h3>
            <p className="mt-2 text-white/70 leading-relaxed">
              Elevate grassroots sports footage into a premium-feel trailer using rhythm, typography, and color grading—without heavy VFX budgets.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-display">Wireframe & structure</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-white/60 text-sm">
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/10 p-4">Hook: cold open, bass hit, scoreboard pop.</div>
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/10 p-4">
              Mid: combo of close-ups + crowd, overlay stats, beat-matched cuts.
            </div>
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/10 p-4">
              Outro: logo sting, CTA to next match, slow fade with chant audio.
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Watch</p>
              <h3 className="text-2xl font-display">MacBook preview (hover to play)</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Video stays paused until hover</p>
          </div>
          <div className="device-macbook">
            <SportsVideoPlayer src="/Sports.mov" />
            <div className="device-macbook-base" />
          </div>
          <p className="text-xs text-white/60">Tip: Replace /Sports.mov in public/ if you have a longer or updated cut.</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">What to add</h3>
            <ul className="mt-3 space-y-2 text-white/70 text-sm leading-relaxed">
              <li>• Key specs: length, frame rate, color grade, tools (e.g., Premiere, After Effects).</li>
              <li>• Before/after frames to show grading and typography polish.</li>
              <li>• Metrics: watch time, social engagement, ticket uplift.</li>
              <li>• CTA buttons: download press kit, share link, or view storyboard.</li>
            </ul>
          </div>
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">Next steps</h3>
            <p className="mt-2 text-white/70 leading-relaxed">
              Swap placeholder copy with your narrative, drop in wireframe images, and add any long-form scroll assets. Need a scroll-on-hover
              storyboard? Export a tall JPG from Figma and we can slot it between sections.
            </p>
            <Link href="/contact" className="mt-4 inline-flex text-sm uppercase tracking-[0.3em] text-street-accent">
              Book a launch edit →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
