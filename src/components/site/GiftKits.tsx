import { motion } from "framer-motion";
import giftKit from "@/assets/gift-kit.jpg";

const kits = [
  "Employee Welcome Kit",
  "New Joiner Kit",
  "Conference Kit",
  "Fest Merchandise",
  "College Fest Kit",
  "Event Giveaway Kit",
  "Product Launch Kit",
];

export function GiftKits() {
  return (
    <section id="kits" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
              <img src={giftKit} alt="Premium corporate welcome kit" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-ember px-5 py-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-ink/70">Packed with</div>
              <div className="font-display text-xl font-bold text-ink">Care.</div>
            </div>
          </motion.div>

          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Curated gift kits</div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Unboxings worth <span className="italic">posting.</span>
            </h2>
            <p className="mt-6 max-w-lg text-foreground/60">
              Curated boxes with matching apparel, accessories and stationery.
              Custom notes, custom packaging, custom everything.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {kits.map((k) => (
                <span key={k} className="rounded-full border border-black/10 bg-background px-4 py-2 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-cream">
                  {k}
                </span>
              ))}
            </div>
            <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5">
              Design my kit →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}