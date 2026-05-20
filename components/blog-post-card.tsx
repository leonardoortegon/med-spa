import Link from "next/link";
import { formatBlogDate, getBlogCategoryMeta, type BlogPost } from "@/lib/blog-posts";

type Props = {
  post: BlogPost;
};

export function BlogPostCard({ post }: Props) {
  const category = getBlogCategoryMeta(post.category);

  return (
    <article className="flex h-full flex-col border border-zinc-200 bg-white transition-shadow hover:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.18)]">
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {category?.label ?? post.category}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-black">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-zinc-600">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 text-sm font-medium tracking-wide text-black transition-colors hover:text-zinc-700"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
