import ArchitectureMermaid from "../components/ArchitectureMermaid";

export default function FoodCrewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            The Food Crew — System Architecture
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Browser → Express → Routes → Views / Static → MySQL
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <ArchitectureMermaid />
        </section>

        <p className="mt-6 text-xs text-slate-500">
          Tip: You can export the rendered SVG directly from the DOM for your portfolio.
        </p>
      </div>
    </main>
  );
}
