"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import { TagBadge } from "@/components/TagBadge";
import type { Post } from "@/types/post";

type LogbookClientProps = {
  posts: Post[];
  tags: string[];
};

export function LogbookClient({ posts, tags }: LogbookClientProps) {
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag") ?? undefined;
  const visiblePosts = activeTag ? posts.filter((post) => post.tags.includes(activeTag)) : posts;

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link className={`inline-flex items-center border px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.16em] ${!activeTag ? "border-amber bg-amber/15 text-amber" : "border-copper/35 text-muted"}`} href="/logbook">
          all
        </Link>
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} active={tag === activeTag} />
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
