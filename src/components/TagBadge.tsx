import Link from "next/link";

type TagBadgeProps = {
  tag: string;
  active?: boolean;
  linked?: boolean;
};

export function TagBadge({ tag, active = false, linked = true }: TagBadgeProps) {
  const className = `inline-flex items-center border px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.16em] transition ${
    active
      ? "border-amber bg-amber/15 text-amber"
      : "border-copper/35 bg-panel/70 text-muted hover:border-ember/60 hover:text-amber"
  }`;

  if (!linked) {
    return <span className={className}>{tag}</span>;
  }

  return (
    <Link href={`/logbook?tag=${encodeURIComponent(tag)}`} className={className}>
      {tag}
    </Link>
  );
}
