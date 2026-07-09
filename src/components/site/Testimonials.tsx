import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { q: "Our joining kits became the reason people posted about their first day. Wild ROI.", n: "Ananya Rao", r: "Head of People, Fintech Startup" },
  { q: "Ordered 800 hoodies for our offsite. Zero defects, delivered a day early.", n: "Rohan Mehta", r: "COO, SaaS Company" },
  { q: "Fest merch that sold out in 48 hours. Our juniors are already asking for next year.", n: "Ishita Kapoor", r: "Fest Coordinator, IIM" },
  { q: "Finally a vendor that treats print quality like we treat code quality.", n: "Kabir Shah", r: "Founder, Design Studio" },
  { q: "Speaker gifts felt like unboxing an Apple product. That's the compliment they gave us.", n: "Meera Nair", r: "Events Lead, Tech Conference" },
  { q: "Uniforms for 300 staff across 6 hotels. Consistent, comfortable, on brand.", n: "Aditya Verma", r: "Brand Manager, Hospitality Group" },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Client love</div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            What teams say after the first box lands.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`flex flex-col justify-between rounded-3xl border border-black/10 p-7 transition-transform hover:-translate-y-1 ${
                i === 1 ? "bg-ink text-cream" : "bg-card"
              }`}
            >
              <div className="flex gap-1 text-ember">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-current/10 pt-5">
                <div className={`grid h-10 w-10 place-items-center rounded-full font-display text-sm font-bold ${i === 1 ? "bg-ember text-ink" : "bg-ink text-cream"}`}>
                  {t.n.split(" ").map((x) => x[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className={`text-xs ${i === 1 ? "text-cream/60" : "text-foreground/55"}`}>{t.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}