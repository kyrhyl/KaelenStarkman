export function Footer() {
  return (
    <footer className="mt-24 border-t border-copper/25 bg-void/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-muted sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-cream">Starkmanir Recovery Archive</p>
          <p className="mt-3 max-w-2xl">
            Private capsuleer journal, patrol ledger, and cultural recovery index maintained from the Arzad and Ezzara deployment corridor.
          </p>
        </div>
        <div className="terminal-panel angled p-4">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-amber">Signal Integrity</p>
          <p className="mt-2 text-cream">No database. No live feed. Static records only.</p>
        </div>
      </div>
    </footer>
  );
}
