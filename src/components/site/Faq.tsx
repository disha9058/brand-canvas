import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What's the minimum order quantity?", a: "We start at 25 pieces per product. Larger quantities unlock better per-unit pricing." },
  { q: "How long does an order take?", a: "Most bulk orders ship in 7–10 working days from artwork approval. Rush timelines available." },
  { q: "Can you source products we don't see listed?", a: "Yes. If it's a fabric-based product with a printable surface, we can source and brand it." },
  { q: "Do you help with design?", a: "Absolutely. Our in-house team can refine your artwork or create something new — no extra charge for standard work." },
  { q: "Do you ship pan-India?", a: "Yes. Delivered anywhere in India, with tracked dispatch and packing options." },
  { q: "How does pricing work?", a: "Every quote is custom based on product, quantity, fabric and print area. Share your brief and get pricing in under 12 hours." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Answers, no fluff.
          </h2>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-semibold md:text-xl">{f.q}</span>
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all ${open === i ? "rotate-45 bg-ember text-ink" : "bg-ink text-cream"}`}>
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-14 text-foreground/60">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}