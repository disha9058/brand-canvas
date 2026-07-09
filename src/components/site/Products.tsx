import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import hoodie from "@/assets/product-hoodie.jpg";
import tshirt from "@/assets/product-tshirt.jpg";
import tote from "@/assets/product-tote.jpg";
import cap from "@/assets/product-cap.jpg";

const products = [
  { title: "Hoodies", tag: "Heavyweight · 320 GSM", img: hoodie, size: "tall" },
  { title: "T-Shirts & Polos", tag: "Bio-washed cotton", img: tshirt, size: "wide" },
  { title: "Tote Bags", tag: "Natural canvas", img: tote, size: "wide" },
  { title: "Caps & Backpacks", tag: "Structured, durable", img: cap, size: "tall" },
];

export function Products() {
  return (
    <section id="products" className="bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">The catalog</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Everything you'd want to put a logo on.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-ember">
            Request full catalog <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {products.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative block overflow-hidden rounded-3xl bg-white/5 ${
                p.size === "tall" ? "md:col-span-1 md:row-span-2" : "md:col-span-1"
              }`}
            >
              <div className={`overflow-hidden ${p.size === "tall" ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-ember">{p.tag}</div>
                  <div className="mt-1 font-display text-2xl font-bold">{p.title}</div>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {["Sweatshirts", "Uniforms", "Aprons", "Towels", "Gym bags", "Fabric pouches", "Shirts", "Any fabric"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 px-5 py-4 text-sm text-cream/70 transition-colors hover:border-ember hover:text-ember">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}