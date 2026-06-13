import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxRenderer } from "@/components/MdxRenderer";
import { TagBadge } from "@/components/TagBadge";
import { formatDate } from "@/lib/date";
import { getAdjacentPosts, getAllPosts, getPostBySlug } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : ["/images/kaelen-hero-1.png"]
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = getAdjacentPosts(slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="terminal-panel angled overflow-hidden">
        {post.cover ? <img src={post.cover} alt="" className="h-72 w-full object-cover opacity-85" /> : null}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="h-1 w-1 rounded-full bg-ember" />
            <span className="text-amber">{post.category}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-[0.08em] text-cream sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </header>
      <div className="prose prose-lg prose-capsuleer mt-10 max-w-none">
        <MdxRenderer source={post.content} />
      </div>
      <nav className="mt-14 grid gap-4 border-t border-copper/25 pt-8 sm:grid-cols-2">
        {previous ? (
          <Link href={`/logbook/${previous.slug}`} className="terminal-panel angled p-5 transition hover:border-amber/60">
            <span className="font-display text-xs uppercase tracking-[0.22em] text-muted">Previous</span>
            <span className="mt-2 block text-lg text-cream">{previous.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/logbook/${next.slug}`} className="terminal-panel angled p-5 text-right transition hover:border-amber/60">
            <span className="font-display text-xs uppercase tracking-[0.22em] text-muted">Next</span>
            <span className="mt-2 block text-lg text-cream">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
