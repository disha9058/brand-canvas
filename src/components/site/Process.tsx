import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Share your design", d: "Send us your logo or artwork. No design? We'll help." },
  { n: "02", t: "Approve the mockup", d: "We render photorealistic mockups within 24 hours." },
  { n: "03", t: "DTF printing", d: "Vibrant, precise, durable prints on premium fabric." },
  { n: "04", t: "Quality check", d: "Every piece inspected. Nothing ships that we wouldn't wear." },
  { n: "05", t: "Delivered", d: "Neatly packed and dispatched pan-India." },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">How it works</div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            From artwork to arrival, in five steps.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-3xl border border-black/10 bg-background p-6 transition-all hover:-translate-y-1 hover:border-ink"
            >
              <div className="font-display text-5xl font-bold text-ember">{s.n}</div>
              <div className="mt-8 font-display text-xl font-bold">{s.t}</div>
              <div className="mt-2 text-sm text-foreground/60">{s.d}</div>
              {i < steps.length - 1 && (
                <div className="absolute right-4 top-8 hidden text-ink/20 md:block">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}