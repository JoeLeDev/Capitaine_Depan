export function BrandTitle({ className = "" }: { className?: string }) {
  return (
    <h1
      className={`font-display text-5xl leading-none tracking-wide sm:text-6xl md:text-7xl ${className}`}
      aria-label="Capitaine Depan'"
    >
      <span className="block italic text-white">CAPITAINE</span>
      <span
        className="block italic text-brand-orange"
        style={{
          WebkitTextStroke: "2px #000",
          paintOrder: "stroke fill",
        }}
      >
        DEPAN&apos;
      </span>
    </h1>
  );
}
