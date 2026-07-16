import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#kits", label: "Gift Kits" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-full border border-black/5 px-5 py-3 transition-all duration-500 ${
              scrolled
                ? "bg-background/80 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]"
                : "bg-transparent"
            }`}
          >
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
              <img src="/inkcognito-logo.jpeg" alt="INKCOGNITO" className="h-10 w-auto object-contain" />
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 md:inline-flex"
              >
                Get Quote
              </a>
              <button
                aria-label="Menu"
                onClick={() => setOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink text-cream md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-display text-lg font-bold tracking-tight">
                INK<span className="text-ember">COGNITO</span>
              </span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-2 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/10 py-5 font-display text-4xl font-bold tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-10 rounded-full bg-ember px-6 py-4 text-center text-base font-semibold text-ink"
              >
                Get Free Quote →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}