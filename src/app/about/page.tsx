import type { Metadata } from "next";
import { CharacterProfileCard } from "@/components/CharacterProfileCard";
import { ShipCard } from "@/components/ShipCard";

export const metadata: Metadata = {
  title: "About Kaelen",
  description: "Biography and capsuleer record for Kaelen Starkman, Starkmanir Cultural Recovery Specialist."
};

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <CharacterProfileCard />
      <div className="space-y-8">
        <div className="terminal-panel angled p-6 sm:p-8">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber">About Kaelen</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-[0.08em] text-cream">Vanguard of the Restoration</h1>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
            <p>
              Kaelen Starkman keeps two ledgers: one for ammunition, fuel, and hull integrity, and another for names. The second ledger matters more.
            </p>
            <p>
              Born to the fractured inheritance of the Starkmanir, she became a capsuleer not to outrun memory, but to make it harder to erase. Her work moves between patrol routes and quiet recovery: scanning dead pockets, cataloging relic fragments, extracting corrupted archives, and returning context to a people trained by history to distrust silence.
            </p>
            <p>
              In Arzad and Ezzara, sovereignty is not a flag on a map. It is the right to name the dead, repair the living, and decide what gets remembered next.
            </p>
          </div>
        </div>
        <ShipCard />
      </div>
    </section>
  );
}
