"use client";

type NodeProps = {
  title: string;
  subtitle?: string;
};

const NodeBox = ({ title, subtitle }: NodeProps) => (
  <div className="rounded-xl border border-slate-200/60 bg-white/90 px-4 py-3 text-center shadow-sm">
    <p className="text-sm font-semibold text-slate-900">{title}</p>
    {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
  </div>
);

const NodeGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-xl border border-slate-200/60 bg-white/90 p-4 shadow-sm">
    <p className="text-sm font-semibold text-slate-900">{title}</p>
    <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const ArrowDown = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1 text-[11px] text-slate-500">
    <div className="h-4 w-px bg-slate-300" />
    <span className="px-2 text-center leading-tight">{label}</span>
    <div className="h-4 w-px bg-slate-300" />
    <div className="h-2 w-2 rotate-45 border-b border-r border-slate-400" />
  </div>
);

/**
 * WingedWonderArchitecture renders the static-site architecture for the Winged Wonder exhibit.
 * Flow: Browser → static hosting → HTML/CSS/JS + assets, with chapters/stories, GSAP motion, and QR-linked media.
 */
export default function WingedWonderArchitecture() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] rounded-2xl border border-slate-200 bg-sky-50 p-6 text-slate-900 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <NodeBox title="Browser (Viewer)" subtitle="Client" />
          <ArrowDown label="Requests static site" />
          <NodeBox title="Static Hosting" subtitle="GitHub Pages / Netlify / Vercel" />
          <ArrowDown label="Delivers HTML + CSS + JS + assets" />

          <div className="grid w-full gap-4 md:grid-cols-2">
            <NodeGroup
              title="Content & structure"
              items={[
                'Chapter pages: intro, herbivores, carnivores, omnivores, conclusion',
                'Bird detail pages under birds/',
                'Narratives under stories/',
                'data/ metadata to list/organize content'
              ]}
            />
            <NodeGroup
              title="Presentation layer"
              items={['styles.css: CSS variables, layouts, responsive galleries', 'Typography: Montserrat + Inter']}
            />
            <NodeGroup
              title="Interaction & motion"
              items={[
                'script.js: navigation + UI behaviors',
                'GSAP + ScrollTrigger for museum-like reveals'
              ]}
            />
            <NodeGroup
              title="Asset system"
              items={[
                'assets/: postcard scans, stamps, artwork',
                'images/: supporting visuals',
                'QR/: high-res codes linking placards to pages'
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
