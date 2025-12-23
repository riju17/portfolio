"use client";

type NodeProps = {
  title: string;
  subtitle?: string;
};

const NodeBox = ({ title, subtitle }: NodeProps) => (
  <div className="rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-center shadow-sm">
    <p className="text-sm font-semibold text-slate-900">{title}</p>
    {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
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

const ArrowRight = ({ label, bidirectional = false }: { label: string; bidirectional?: boolean }) => (
  <div className="flex items-center gap-2 text-[11px] text-slate-500">
    {!bidirectional && <div className="h-2 w-2 rotate-45 border-t border-r border-slate-400" />}
    {bidirectional && <div className="h-2 w-2 rotate-[135deg] border-t border-r border-slate-400" />}
    <div className="h-px w-10 bg-slate-300" />
    <span className="whitespace-nowrap px-1 leading-tight">{label}</span>
    <div className="h-px w-10 bg-slate-300" />
    <div className="h-2 w-2 rotate-45 border-t border-r border-slate-400" />
    {bidirectional && <div className="h-2 w-2 -rotate-45 border-t border-r border-slate-400" />}
  </div>
);

/**
 * ArchitectureMermaid now renders a static block diagram (no Mermaid dependency).
 * Flow: Browser → Express → Routes → Handlebars → Browser, with branches to Static Assets and MySQL.
 */
export default function ArchitectureMermaid() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] rounded-2xl border border-slate-200 bg-sky-50 p-6 text-slate-900 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <NodeBox title="Browser (User)" subtitle="Client" />
          <ArrowDown label="HTTP Request" />
          <div className="flex items-start gap-6">
            <NodeBox title="Express.js Server" subtitle="Node.js — index.js / app.js" />
            <ArrowRight label="Serve static files" />
            <NodeBox title="Static Assets" subtitle="public/ — CSS • JS • Images" />
          </div>
          <ArrowDown label="Forward to routes" />
          <div className="flex items-start gap-6">
            <NodeBox title="Routes / Controllers" subtitle="Request handling" />
            <ArrowRight label="Read / Write" bidirectional />
            <NodeBox title="MySQL Database" subtitle="users • reservations" />
          </div>
          <ArrowDown label="Render dynamic pages" />
          <NodeBox title="Handlebars Templates" subtitle="views/" />
          <ArrowDown label="HTML/CSS/JS Response" />
          <NodeBox title="Browser (User)" subtitle="Page rendered" />
        </div>
      </div>
    </div>
  );
}
