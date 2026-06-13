import Link from "next/link";
import { character } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-copper/25">
      <img src="/images/kaelen-hero-1.png" alt="Kaelen Starkman in a Minmatar capsuleer command deck" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-void via-void/78 to-void/28" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-void via-transparent to-void/30" />
      <div className="absolute inset-0 -z-10 scanlines opacity-25" />
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.34em] text-amber">Arzad / Ezzara Restoration Channel</p>
          <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-none tracking-[0.04em] text-cream sm:text-6xl lg:text-7xl">
            {character.name}
          </h1>
          <p className="mt-5 font-display text-2xl uppercase tracking-[0.16em] text-ember">{character.title}</p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/82">
            A private logbook and cultural recovery archive from a Starkmanir capsuleer mapping the scars, names, losses, and living fragments left in the reclamation corridor.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/logbook" className="border border-ember bg-ember px-6 py-3 text-center font-display text-sm font-bold uppercase tracking-[0.22em] text-void transition hover:bg-amber hover:border-amber">
              Read the logbook
            </Link>
            <Link href="/archive" className="border border-copper/60 bg-void/50 px-6 py-3 text-center font-display text-sm font-bold uppercase tracking-[0.22em] text-amber transition hover:bg-panel">
              Open archive
            </Link>
          </div>
        </div>
        <div className="terminal-panel angled p-5 sm:p-6 lg:justify-self-end">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-amber">Capsuleer Identity</p>
          <dl className="mt-5 grid gap-4 text-sm">
            {[
              ["Tribe", character.tribe],
              ["Role", character.role],
              ["Deployment", character.deployment],
              ["Preferred hull", character.favoriteShip]
            ].map(([label, value]) => (
              <div key={label} className="border-l-2 border-rust bg-void/45 p-4">
                <dt className="font-display text-xs uppercase tracking-[0.22em] text-muted">{label}</dt>
                <dd className="mt-1 text-lg text-cream">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
