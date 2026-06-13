import { character } from "@/lib/site";

export function CharacterProfileCard() {
  return (
    <aside className="terminal-panel angled overflow-hidden">
      <img src="/images/kaelen-profile.png" alt="Kaelen Starkman portrait on an Arzad command deck" className="h-72 w-full object-cover object-center opacity-90" />
      <div className="p-6">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-amber">Personnel Record</p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-[0.08em] text-cream">{character.name}</h2>
        <p className="mt-2 text-ember">{character.title}</p>
        <div className="mt-6 grid gap-3 text-sm text-muted">
          <p><span className="text-amber">Tribe:</span> {character.tribe}</p>
          <p><span className="text-amber">Role:</span> {character.role}</p>
          <p><span className="text-amber">Deployment:</span> {character.deployment}</p>
        </div>
      </div>
    </aside>
  );
}
