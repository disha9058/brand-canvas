const logos = [
  "ACME", "NORTHWIND", "STELLAR", "PIXELWORKS", "ORBIT", "MONOLITH",
  "KINETIC", "VOYAGE", "LUMEN", "FORMA", "NEBULA", "CARBON",
];

export function TrustedBy() {
  return (
    <section className="border-y border-black/5 bg-ink py-14 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-cream/50">
          <span>Trusted by teams shipping merch worldwide</span>
          <div className="flex gap-6">
            <span>100+ Clients</span>
            <span className="text-ember">●</span>
            <span>Bulk orders</span>
            <span className="text-ember">●</span>
            <span>Fast turnaround</span>
          </div>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="marquee flex w-max gap-16">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-3xl font-bold tracking-tight text-cream/40 transition-colors hover:text-cream"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}