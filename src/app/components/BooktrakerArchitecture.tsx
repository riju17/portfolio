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
 * BooktrakerArchitecture renders a block diagram for the offline-first Streamlit app.
 * Flow: Browser (Streamlit UI) → app.py (core logic) → SQLite (storage), with CSV import/export handlers.
 */
export default function BooktrakerArchitecture() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] rounded-2xl border border-slate-200 bg-sky-50 p-6 text-slate-900 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <NodeBox title="Browser (Streamlit UI)" subtitle="Local client" />
          <ArrowDown label="User actions / form input" />
          <div className="flex items-start gap-6">
            <NodeBox title="app.py" subtitle="Core logic & CRUD" />
            <ArrowRight label="CSV import/export" bidirectional />
            <NodeBox title="CSV Snapshots" subtitle="Backups / transfers" />
          </div>
          <ArrowDown label="Read / Write" />
          <NodeBox title="SQLite Database" subtitle="books • sessions • goals" />
          <ArrowDown label="Updated state to UI" />
          <NodeBox title="Browser (Streamlit UI)" subtitle="Live dashboard" />
        </div>
      </div>
    </div>
  );
}
