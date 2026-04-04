import { PageHero } from "@/components/shared";
import { staticBlogPosts } from "@/data/blogPosts";
import { motion } from "motion/react";

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Insights"
        title="Cybersecurity"
        titleHighlight="Knowledge"
        subtitle="Practical security tips and plain-language guides from the field."
      />

      <section
        className="relative py-24"
        style={{ background: "oklch(0.11 0.018 205)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, oklch(0.83 0.15 192 / 0.04) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {staticBlogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{
                  background: "oklch(0.12 0.018 205)",
                  border: "1px solid oklch(0.83 0.15 192 / 0.12)",
                  borderTop: "3px solid oklch(0.83 0.15 192 / 0.5)",
                  transition:
                    "border-top-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderTopColor = "oklch(0.83 0.15 192)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 8px 32px oklch(0.83 0.15 192 / 0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderTopColor = "oklch(0.83 0.15 192 / 0.5)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded"
                      style={{
                        color: "var(--cyber-cyan)",
                        background: "oklch(0.83 0.15 192 / 0.1)",
                        border: "1px solid oklch(0.83 0.15 192 / 0.2)",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "oklch(0.50 0.02 210)" }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base leading-snug text-foreground mb-3">
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "oklch(0.58 0.02 210)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{
                      borderTop: "1px solid oklch(0.25 0.035 210 / 0.4)",
                    }}
                  >
                    <span
                      className="text-xs font-mono"
                      style={{ color: "oklch(0.45 0.02 210)" }}
                    >
                      {post.author}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
