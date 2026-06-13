export type PostMeta = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  cover?: string;
  featured?: boolean;
};

export type Post = PostMeta & {
  slug: string;
  content: string;
};
