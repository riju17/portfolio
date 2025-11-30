import Link from 'next/link';
import MobileVideoPlayer from '@/components/MobileVideoPlayer';

export const metadata = {
  title: 'Academy Management — Case Study'
};

export default function AcademyManagementPage() {
  return (
    <div className="studio-coral-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-14 text-white md:px-6 md:py-16">
        <div className="studio-coral-card rounded-3xl p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">Case study</p>
          <h1 className="mt-3 text-4xl font-display">Academy Management Platform</h1>
          <p className="mt-3 text-white/70 max-w-3xl">
            A web platform for training academies: schedules, player progress, payments, and match reports in one place with crisp, sporty UI.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
            <span className="rounded-full border border-white/15 px-3 py-1">Product design</span>
            <span className="rounded-full border border-white/15 px-3 py-1">UI system</span>
            <span className="rounded-full border border-white/15 px-3 py-1">Frontend</span>
          </div>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">About the project</h3>
            <p className="mt-2 text-white/70 leading-relaxed">
              Built to replace spreadsheets and WhatsApp threads. Coaches get easy attendance + drills, parents get clear fees and updates, and admins
              see revenue + roster health at a glance.
            </p>
          </div>
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">Motivation</h3>
            <p className="mt-2 text-white/70 leading-relaxed">
              Small academies need pro-grade tooling without bloat. We focused on clarity, mobile-first data entry, and branded PDFs for trust.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-display">Wireframe & structure</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-white/60 text-sm">
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/10 p-4">Dashboard: fees, attendance, next matches.</div>
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/10 p-4">
              Sessions: drills, squads, coach notes, quick attendance.
            </div>
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/10 p-4">
              Reports: PDFs for parents, exports for admin, shareable links.
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Watch</p>
              <h3 className="text-2xl font-display">Iphone preview (hover to play)</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Video stays paused until hover</p>
          </div>
          <div className="grid gap-6 md:grid-cols-[0.6fr_1fr] items-start">
            <div className="device-mobile">
              <MobileVideoPlayer src="/Academymanagement.mov" />
              <div className="device-mobile-base" />
            </div>
            <div className="studio-coral-card rounded-2xl p-5 shadow-lg text-sm leading-relaxed text-white/80">
              <h4 className="text-xl font-display text-white">Playback notes</h4>
              <p className="mt-2">
                Hover to play the mobile demo. The video resets when you leave the frame so viewers can replay from the start without controls.
              </p>
              <p className="mt-3">
                Add a short highlight list here: onboarding, attendance tap flow, payments, PDF export. Include runtime and key metrics once ready.
              </p>
            </div>
          </div>
          <p className="text-xs text-white/60">Replace the video source with your Academy demo (drop the file in /public and update the path).</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">What to add</h3>
            <ul className="mt-3 space-y-2 text-white/70 text-sm leading-relaxed">
              <li>• Key flows: onboarding, fee reminders, attendance, report export.</li>
              <li>• System cards: design tokens, buttons, tables, badges.</li>
              <li>• Metrics: overdue fees cut %, report open rate, adoption by coaches.</li>
              <li>• Tech: Next.js, auth, database, PDF generation approach.</li>
            </ul>
          </div>
          <div className="studio-coral-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-display">Next steps</h3>
            <p className="mt-2 text-white/70 leading-relaxed">
              Add actual wireframes or long-scroll UI exports. Want a scroll-on-hover storyboard? Export a tall JPG from Figma and we’ll slot it
              between sections.
            </p>
            <Link href="/contact" className="mt-4 inline-flex text-sm uppercase tracking-[0.3em] text-street-accent">
              Discuss academy builds →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
