import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { Post } from "@/types/post";
import { TagBadge } from "./TagBadge";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="terminal-panel angled group flex h-full flex-col overflow-hidden">
      {post.cover ? (
        <div className="h-44 overflow-hidden border-b border-copper/25">
          <img src={post.cover} alt="" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-ember" />
          <span className="text-amber">{post.category}</span>
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.08em] text-cream group-hover:text-amber">
          <Link href={`/logbook/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-3 flex-1 text-base leading-7 text-muted">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
