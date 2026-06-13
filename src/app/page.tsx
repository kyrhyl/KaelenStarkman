import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts.filter((post) => post.featured).slice(0, 3);
  const latest = featured.length ? featured : posts.slice(0, 3);

  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-amber">Starkmanir Restoration</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-[0.08em] text-cream">Not conquest. Continuity.</h2>
          </div>
          <p className="text-lg leading-8 text-muted">
            These records are not victory broadcasts. They are field notes from contested systems: patrol routes, burned wrecks, old names recovered from dead storage, and proof that culture can survive inside the gaps empire leaves behind.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/logbook" className="inline-flex border border-copper/60 px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.22em] text-amber transition hover:border-amber hover:bg-panel">
            View all journal entries
          </Link>
        </div>
      </section>
    </>
  );
}
