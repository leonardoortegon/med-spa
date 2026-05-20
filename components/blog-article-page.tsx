import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import {
  formatBlogDate,
  getBlogCategoryMeta,
  getBlogPostBySlug,
  type BlogPost,
} from "@/lib/blog-posts";

type Props = {
  post: BlogPost;
};

export function BlogArticlePage({ post }: Props) {
  const category = getBlogCategoryMeta(post.category);
  const related =
    post.relatedSlugs
      ?.map((slug) => getBlogPostBySlug(slug))
      .filter((p): p is BlogPost => Boolean(p))
      .slice(0, 3) ?? [];

  return (
    <article>
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-12 lg:py-16">
          <nav className="text-xs font-medium text-zinc-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/blog" className="transition-colors hover:text-black">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-zinc-800">{category?.label}</li>
            </ol>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {category?.label}
          </p>
          <h1 className="mt-4 font-display text-[2rem] font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:leading-[1.12]">
            {post.title}
          </h1>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{post.readMinutes} min read</span>
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-zinc-600 lg:text-base">{post.intro}</p>
        </div>
      </header>

      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-14">
          <div className="space-y-10">
            {post.sections.map((section, index) => (
              <section key={index}>
                {section.heading ? (
                  <h2 className="font-display text-2xl font-semibold text-black">{section.heading}</h2>
                ) : null}
                <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[15px] leading-relaxed text-zinc-600 lg:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-zinc-200 pt-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="border-t border-zinc-200 bg-zinc-50/80" aria-labelledby="related-posts-heading">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-16">
            <h2 id="related-posts-heading" className="font-display text-2xl font-semibold text-black">
              Related reading
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <BlogPostCard post={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}
