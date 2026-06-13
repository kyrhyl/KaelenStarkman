import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-copper/25 bg-void/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-ember/50 bg-rust/20 font-display text-lg font-bold text-amber shadow-glow">
            KS
          </span>
          <span>
            <span className="block font-display text-lg font-bold uppercase tracking-[0.22em] text-cream group-hover:text-amber">
              Kaelen Starkman
            </span>
            <span className="block text-xs uppercase tracking-[0.24em] text-muted">Restoration terminal</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-transparent px-3 py-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted transition hover:border-copper/40 hover:bg-panel hover:text-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-copper/10 px-4 py-2 md:hidden">
        {siteConfig.nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm uppercase tracking-[0.16em] text-muted">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
