export default function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="relative h-px flex items-center justify-center">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-fern/50 to-transparent" />
        <span className="relative w-2 h-2 rotate-45 bg-sunlight/70" />
      </div>
    </div>
  );
}
