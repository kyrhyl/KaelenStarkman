import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recovery Records",
  description: "Recovered lore fragments, relic sites, ancient data cores, and Phased Field observations."
};

const records = [
  {
    type: "Recovered Lore Fragment",
    title: "Ash-Marked Kinship Verse",
    location: "Arzad VIII - Moon 2 debris channel",
    status: "Partially translated",
    note: "A ritual cadence preserved in broken devotional storage. Three family names remain intact."
  },
  {
    type: "Relic Site",
    title: "Ezzara Silent Gantry",
    location: "Ezzara outer belt survey pocket",
    status: "Cataloged",
    note: "Industrial lattice with Starkmanir hand-marking beneath an Amarr repair plate."
  },
  {
    type: "Ancient Data Core",
    title: "Core 7A: Household Routes",
    location: "Recovered from hostile wreckage",
    status: "Checksum unstable",
    note: "Fragmented transit records imply forced movement through three known stations and one missing node."
  },
  {
    type: "Phased Field Observation",
    title: "Observation 001: Orange Net Bloom",
    location: "Arzad stargate approach",
    status: "Repeat scan required",
    note: "Lattice flare coincided with local spike and a dead carrier signal under Republic noise."
  }
];

export default function ArchivePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden terminal-panel angled p-6 sm:p-10">
        <img src="/images/kaelen-hero-3.png" alt="Arzad nebula and capsuleer recovery interface" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-void/75" />
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber">Archive / Recovery Records</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold uppercase tracking-[0.08em] text-cream">Fragments worth bringing home</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          Not every recovered object is sacred. Some are corrupted files, bent plates, or wrong names carved by occupiers. Each is still evidence. Each gets handled before it gets judged.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {records.map((record) => (
          <article key={record.title} className="terminal-panel angled p-6">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-amber">{record.type}</p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-[0.08em] text-cream">{record.title}</h2>
            <dl className="mt-5 grid gap-3 text-sm">
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="text-cream">{record.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Status</dt>
                <dd className="text-cream">{record.status}</dd>
              </div>
            </dl>
            <p className="mt-5 leading-7 text-muted">{record.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
