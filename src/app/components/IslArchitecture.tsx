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

const ArrowRight = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 text-[11px] text-slate-500">
    <div className="h-2 w-2 rotate-45 border-t border-r border-slate-400" />
    <div className="h-px w-10 bg-slate-300" />
    <span className="whitespace-nowrap px-1 leading-tight">{label}</span>
    <div className="h-px w-10 bg-slate-300" />
    <div className="h-2 w-2 rotate-45 border-t border-r border-slate-400" />
  </div>
);

/**
 * IslArchitecture renders the ISL pipeline: camera → MediaPipe keypoints → 42-dim vector → MLP → A–Z output (+ optional TTS).
 */
export default function IslArchitecture() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] rounded-2xl border border-slate-200 bg-sky-50 p-6 text-slate-900 shadow-sm">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <NodeBox title="Camera frame / image" subtitle="Input" />
            <ArrowRight label="Detect hand" />
            <NodeBox title="MediaPipe hand landmarks" subtitle="21 keypoints (42 features)" />
            <ArrowRight label="Feature vector" />
            <NodeBox title="MLP Classifier (MLPFNN)" subtitle="TensorFlow/Keras" />
            <ArrowRight label="Predicted class" />
            <NodeBox title="A–Z sign output" subtitle="Prediction" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <NodeBox title="Optional post-processing" subtitle="Text / speech output" />
          </div>
        </div>
      </div>
    </div>
  );
}
