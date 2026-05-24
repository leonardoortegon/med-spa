import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import { blogCategories, blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="bg-white">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-12 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Blog</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-black lg:text-[2.75rem]">
            Skin, wellness, and treatment guides
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-600 lg:text-base">
            Educational articles from our Coral Springs team: what to expect, how to prepare, and how
            to plan care over time. Browse by category or read the latest below.
          </p>
          <nav
            className="mt-10 flex flex-wrap gap-2"
            aria-label="Blog categories"
          >
            {blogCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#category-${cat.id}`}
                className="rounded-[5px] border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-black"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-12 lg:py-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Latest</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <BlogPostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {blogCategories.map((cat) => {
        const posts = sorted.filter((p) => p.category === cat.id);
        if (posts.length === 0) return null;

        return (
          <section
            key={cat.id}
            id={`category-${cat.id}`}
            className="scroll-mt-24 border-t border-zinc-200"
          >
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-12 lg:py-14">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-semibold text-black">{cat.label}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{cat.description}</p>
              </div>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <BlogPostCard post={post} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="border-t border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-12 lg:py-14">
          <p className="text-[15px] leading-relaxed text-zinc-600">
            Ready to talk through what you read?{" "}
            <Link
              href="/contact"
              className="font-medium text-black underline underline-offset-4 transition-colors hover:text-zinc-700"
            >
              Contact us
            </Link>{" "}
            or explore{" "}
            <Link
              href="/services"
              className="font-medium text-black underline underline-offset-4 transition-colors hover:text-zinc-700"
            >
              services
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
