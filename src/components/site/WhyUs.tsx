import { motion } from "framer-motion";
import { Printer, Palette, Zap, Package, Leaf, ShieldCheck, MapPin, Layers } from "lucide-react";

const items = [
  { icon: Printer, title: "Premium DTF printing", desc: "Vibrant, durable prints on almost any fabric.", span: "md:col-span-2 md:row-span-2", dark: true },
  { icon: Palette, title: "Unlimited colors", desc: "Gradients, photos, no color count limit." },
  { icon: Layers, title: "No design limits", desc: "Fine detail, dense artwork, no problem." },
  { icon: Zap, title: "Fast delivery", desc: "7–10 days for most bulk orders." },
  { icon: Package, title: "Bulk pricing", desc: "Better rates as your quantity scales." },
  { icon: ShieldCheck, title: "Quality checked", desc: "Every piece inspected before dispatch.", accent: true },
  { icon: Leaf, title: "Eco-friendly inks", desc: "Water-based, OEKO-TEX certified." },
  { icon: MapPin, title: "Made in India", desc: "In-house production, no middlemen." },
];

export function WhyUs() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Why teams pick us</div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Merch built with the same care as your product.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/60">
            No local print-shop energy. Every order is treated like a launch — from fabric sourcing to final packing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[180px]">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                item.dark
                  ? "border-transparent bg-ink text-cream"
                  : item.accent
                  ? "border-transparent bg-ember text-ink"
                  : "border-black/10 bg-card"
              } ${item.span ?? ""}`}
            >
              <div className={`grid h-11 w-11 place-items-center rounded-2xl ${
                item.dark ? "bg-white/10" : item.accent ? "bg-ink text-ember" : "bg-ink text-cream"
              }`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-8">
                <h3 className={`font-display font-bold leading-tight ${item.span ? "text-3xl md:text-4xl" : "text-xl"}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-sm ${item.dark ? "text-cream/60" : item.accent ? "text-ink/70" : "text-foreground/55"}`}>
                  {item.desc}
                </p>
              </div>
              {item.dark && (
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-ember/20 blur-3xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}