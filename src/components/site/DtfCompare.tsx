import { Check, X } from "lucide-react";

const rows = [
  ["Unlimited colors & gradients", true, false, false],
  ["No minimum design complexity", true, false, true],
  ["Works on almost any fabric", true, false, true],
  ["Soft, stretchy feel", true, false, false],
  ["Long-lasting durability", true, true, false],
  ["Cost-effective for small runs", true, false, true],
];

export function DtfCompare() {
  return (
    <section className="bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Why DTF</div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            The printing tech that finally caught up.
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-4 border-b border-white/10 bg-white/5 text-xs uppercase tracking-widest">
              <div className="p-5 text-cream/50">Feature</div>
              <div className="p-5 text-center font-semibold text-ember">DTF</div>
              <div className="p-5 text-center text-cream/50">Screen print</div>
              <div className="p-5 text-center text-cream/50">Heat transfer</div>
            </div>
            {rows.map(([label, ...vals], i) => (
              <div key={i} className={`grid grid-cols-4 items-center ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                <div className="p-5 text-sm text-cream/80">{label as string}</div>
                {(vals as boolean[]).map((v, j) => (
                  <div key={j} className="p-5 text-center">
                    {v ? (
                      <Check className={`mx-auto h-5 w-5 ${j === 0 ? "text-ember" : "text-cream/70"}`} />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-cream/20" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}