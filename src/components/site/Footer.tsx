function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="mb-4 text-[11px] uppercase tracking-widest text-foreground/40">{title}</div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}><a href="#" className="text-foreground/70 hover:text-ember">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Wear your <span className="italic text-ember">brand.</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-foreground/55">
              Custom merch that doesn't end up in a drawer. Made in India, made properly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <FooterCol title="Explore" items={["Products", "Industries", "Process", "Gift Kits", "FAQ"]} />
            <FooterCol title="Company" items={["About", "Careers", "Blog", "Contact"]} />
            <FooterCol title="Social" items={["Instagram", "LinkedIn", "Twitter", "Behance"]} />
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-6 text-xs text-foreground/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Brand. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}