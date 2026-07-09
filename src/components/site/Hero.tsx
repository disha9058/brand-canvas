import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroApparel from "@/assets/hero-apparel.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="blob absolute -top-20 -left-20 h-96 w-96 rounded-full bg-ember"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="blob absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-ember-soft"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background/50 px-4 py-1.5 text-xs font-medium backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-ember" />
          <span>Premium DTF Printing · Made in India</span>
        </motion.div>

        <div className="mt-8 grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Corporate merch
              <br />
              people actually
              <br />
              <span className="italic text-ember">want to wear.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-xl text-base text-foreground/60 md:text-lg"
            >
              Custom branded apparel and fabric merchandise for startups,
              enterprises and events. Bulk orders, premium fabrics, DTF printed
              in India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-1"
              >
                Get free quote
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ember text-ink transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="#products"
                className="rounded-full border border-black/15 px-7 py-4 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream"
              >
                Explore products
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 grid max-w-lg grid-cols-3 gap-6"
            >
              {[
                { k: "500+", v: "Brands served" },
                { k: "7 days", v: "Avg. turnaround" },
                { k: "100%", v: "Quality checked" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-3xl font-bold">{s.k}</div>
                  <div className="mt-1 text-xs text-foreground/50">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
            >
              <img
                src={heroApparel}
                alt="Custom branded apparel flat lay"
                width={1600}
                height={1400}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -left-4 top-8 rounded-2xl border border-black/5 bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <div className="text-[10px] font-medium uppercase tracking-widest text-foreground/50">Bulk from</div>
              <div className="font-display text-xl font-bold">25 pcs</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -right-2 bottom-10 flex items-center gap-3 rounded-2xl border border-black/5 bg-ink px-4 py-3 text-cream shadow-xl"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ember text-ink">★</span>
              <div>
                <div className="text-xs opacity-70">Rated</div>
                <div className="text-sm font-semibold">4.9 / 500+ reviews</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}