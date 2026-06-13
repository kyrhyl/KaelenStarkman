import type { Metadata } from "next";
import { Suspense } from "react";
import { LogbookClient } from "@/components/LogbookClient";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Logbook",
  description: "Journal entries, patrol reports, scouting notes, and recovery logs from Kaelen Starkman."
};

export default function LogbookPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="terminal-panel angled p-6 sm:p-8">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber">Capsuleer Logbook</p>
        <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-[0.08em] text-cream">Field Journal</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          Patrol notes, ship losses, scouting reports, recovered Starkmanir lore, restoration campaign logs, and private reflections from Arzad and Ezzara.
        </p>
      </div>
      <Suspense fallback={null}>
        <LogbookClient posts={posts} tags={tags} />
      </Suspense>
    </section>
  );
}
