import { motion } from "framer-motion";

const industries = [
  { n: "01", name: "Startups", desc: "Series A merch that punches above weight." },
  { n: "02", name: "IT & SaaS", desc: "Onboarding kits your team will actually flex." },
  { n: "03", name: "Colleges", desc: "Fest merch, department drops, alumni gifts." },
  { n: "04", name: "Events", desc: "Conference tees, speaker gifts, giveaways." },
  { n: "05", name: "Hospitality", desc: "Uniforms and staff wear for hotels & F&B." },
  { n: "06", name: "Healthcare", desc: "Clean, comfortable branded scrubs & wear." },
  { n: "07", name: "Manufacturing", desc: "Durable workwear built for the floor." },
  { n: "08", name: "NGOs & Causes", desc: "Volunteer kits & campaign merch." },
];

export function Industries() {
  return (
    <section id="industries" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Industries</div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Built for teams that care how they show up.
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {industries.map((it, i) => (
            <motion.a
              key={it.n}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors hover:bg-ink hover:text-cream md:gap-10 md:py-9"
            >
              <span className="w-10 text-xs font-medium text-foreground/40 group-hover:text-ember md:w-14">{it.n}</span>
              <div className="min-w-0">
                <div className="font-display text-2xl font-bold tracking-tight md:text-4xl">{it.name}</div>
                <div className="mt-1 hidden text-sm text-foreground/55 group-hover:text-cream/60 md:block">{it.desc}</div>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-current opacity-40 transition-all group-hover:rotate-45 group-hover:opacity-100">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}