export function ShipCard() {
  return (
    <section className="terminal-panel angled p-6">
      <p className="font-display text-xs uppercase tracking-[0.28em] text-amber">Favorite Hull</p>
      <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-[0.1em] text-cream">Rifter</h2>
      <p className="mt-4 text-lg leading-8 text-muted">
        Fast, scarred, and honest. The Rifter is not a shrine, but it remembers every burn across contested gates and every return trip with a hold full of dust-marked fragments.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Class", "Frigate"],
          ["Doctrine", "Scout / knife-fighter"],
          ["Nickname", "Ash-Hymn"]
        ].map(([label, value]) => (
          <div key={label} className="border border-copper/25 bg-void/45 p-4">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
            <p className="mt-1 text-cream">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
