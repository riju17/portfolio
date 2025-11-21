type TagProps = {
  children: React.ReactNode;
  tone?: 'light' | 'dark';
};

export default function Tag({ children, tone = 'light' }: TagProps) {
  const styles =
    tone === 'light'
      ? 'bg-white/10 text-white'
      : 'bg-black/60 text-white';
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-wide ${styles}`}>
      {children}
    </span>
  );
}
