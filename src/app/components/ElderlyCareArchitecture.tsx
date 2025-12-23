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
    {bidirectional && <div className="h-2 w-2 rotate-[135deg] border-t border-r border-slate-400" />}
    {!bidirectional && <div className="h-2 w-2 rotate-45 border-t border-r border-slate-400" />}
    <div className="h-px w-10 bg-slate-300" />
    <span className="whitespace-nowrap px-1 leading-tight">{label}</span>
    <div className="h-px w-10 bg-slate-300" />
    <div className="h-2 w-2 rotate-45 border-t border-r border-slate-400" />
    {bidirectional && <div className="h-2 w-2 -rotate-45 border-t border-r border-slate-400" />}
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

/**
 * ElderlyCareArchitecture renders the layered Flutter + Firebase + local storage design.
 */
export default function ElderlyCareArchitecture() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] rounded-2xl border border-slate-200 bg-sky-50 p-6 text-slate-900 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <NodeBox title="Device / Camera / Sensors" subtitle="Inputs" />
          <ArrowDown label="Actions / data capture" />
          <div className="grid w-full gap-4 md:grid-cols-3">
            <NodeGroup
              title="UI layer"
              items={[
                'Flutter screens & widgets (Material)',
                'Reminders, vitals, docs, appointments, SOS',
                'Companion caregiver signals'
              ]}
            />
            <NodeGroup
              title="Service layer (get_it)"
              items={[
                'Notifications/alarms (meds, SOS)',
                'Location + routing + reverse geocoding',
                'Messaging/calls/SMS, file system',
                'Document capture, navigation'
              ]}
            />
            <NodeGroup
              title="Data layer"
              items={[
                'Local: sqflite + shared_preferences + cache',
                'Cloud: Firebase Auth + Firestore + Storage',
                'Optional: ML Vision, TomTom/OpenCage, Jitsi'
              ]}
            />
          </div>
          <ArrowDown label="Sync & persistence" />
          <div className="flex flex-wrap items-start gap-6">
            <NodeBox title="Local state" subtitle="Offline-first reliability" />
            <ArrowRight label="Sync" bidirectional />
            <NodeBox title="Cloud state" subtitle="Auth / Firestore / Storage" />
          </div>
          <ArrowDown label="Notifications / updates" />
          <NodeBox title="Caregiver / user feedback" subtitle="Alarms, SOS, vitals, docs" />
        </div>
      </div>
    </div>
  );
}
