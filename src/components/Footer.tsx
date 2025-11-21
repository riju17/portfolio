export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} Riju — Multiverse Portfolio.</p>
        <p className="italic">Crafted with bougey energy & a dash of chaos.</p>
      </div>
    </footer>
  );
}
