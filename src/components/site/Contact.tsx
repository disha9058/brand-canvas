import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-widest text-cream/50">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-ember focus:outline-none"
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36">
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-ember blob" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Let's talk</div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1] tracking-tight sm:text-5xl md:text-6xl">
              Tell us what you're making.
            </h2>
            <p className="mt-6 max-w-md text-cream/60">
              Share your brief and get a custom quote in under 12 hours. No pressure, no spam.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { i: Phone, t: "Call", v: "+91 00000 00000" },
                { i: MessageCircle, t: "WhatsApp", v: "Chat with sales" },
                { i: Mail, t: "Email", v: "hello@brand.in" },
                { i: MapPin, t: "Studio", v: "Bengaluru, India" },
              ].map((c) => (
                <a key={c.t} href="#" className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-ember">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-ember">
                    <c.i className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-widest text-cream/50">{c.t}</div>
                    <div className="truncate text-sm font-medium">{c.v}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 h-52 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]">
              <div className="grid h-full place-items-center text-xs uppercase tracking-widest text-cream/40">
                Google Map placeholder
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Company" name="company" placeholder="Company / org" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Phone" name="phone" placeholder="+91 …" />
              <Field label="Product needed" name="product" placeholder="Hoodies, tees…" />
              <Field label="Estimated quantity" name="qty" placeholder="e.g. 250" />
              <Field label="Preferred delivery date" name="date" type="date" />
              <Field label="Budget (optional)" name="budget" placeholder="₹" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-[11px] uppercase tracking-widest text-cream/50">Requirements</label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Tell us about the project — occasion, artwork, packaging…"
                className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-ember focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {sent ? "Thanks — we'll be in touch" : "Request quote"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}