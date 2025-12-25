import Link from 'next/link';
import ZoomableBoard from '../sports-highlights/ZoomableBoard';

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
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">About the project</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Built to replace spreadsheets and WhatsApp threads. Coaches get easy attendance + drills, parents get clear fees and updates, and admins
              see revenue + roster health at a glance.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Motivation</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
              Small academies need pro-grade tooling without bloat. We focused on clarity, mobile-first data entry, and branded PDFs for trust.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-display">Wireframe & structure</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-black">
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Dashboard: fees, attendance, next matches.
            </div>
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Sessions: drills, squads, coach notes, quick attendance.
            </div>
            <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-4 shadow-[0_14px_30px_rgba(240,80,120,0.16)] ring-1 ring-rose-200/70">
              Reports: PDFs for parents, exports for admin, shareable links.
            </div>
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
                src: '/UIUX/academy management/academy.png',
                alt: 'Academy management mockup',
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
              <li>• Key flows: onboarding, fee reminders, attendance, report export.</li>
              <li>• System cards: design tokens, buttons, tables, badges.</li>
              <li>• Metrics: overdue fees cut %, report open rate, adoption by coaches.</li>
              <li>• Tech: Next.js, auth, database, PDF generation approach.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-100/80 bg-gradient-to-br from-[#ffe9f2] via-white to-[#ffd6e0] p-6 text-black shadow-[0_18px_40px_rgba(240,80,120,0.18)] ring-1 ring-rose-200/70">
            <h3 className="text-2xl font-display">Next steps</h3>
            <p className="mt-2 text-black/70 leading-relaxed">
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
