import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import blogsData from "../data/blogs.json";
import type { BlogPost } from "../data/types";

export const metadata: Metadata = {
  title: "Engineering Blogs & Insights",
  description:
    "Explore Pyronite Tech's engineering blogs on advanced Liferay DXP implementations, open-source systems, headless architecture, and AI integrations.",
  keywords: [
    "Pyronite Blogs",
    "Liferay DXP",
    "Liferay Development",
    "Liferay Integration",
    "Open-Source Systems",
    "Liferay AI",
    "Enterprise Architecture",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: "Engineering Blogs & Insights | Pyronite Tech",
    description:
      "Explore Pyronite Tech's engineering blogs on advanced Liferay DXP implementations, open-source systems, and headless architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blogs & Insights | Pyronite Tech",
    description:
      "Explore Pyronite Tech's engineering blogs on advanced Liferay DXP implementations, open-source systems, and headless architecture.",
  },
};

const blogs = blogsData as BlogPost[];

export default function BlogsPage() {
  return (
    <>
      <style>{`
        .blog-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light, rgba(255, 255, 255, 0.08));
          transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary) !important;
          background-color: rgba(255, 255, 255, 0.04) !important;
        }
      `}</style>
      <ScrollReveal />
      <section className="section" style={{ paddingTop: "4rem" }}>
        <div className="container reveal">
          <div className="section-header">
            <span className="label">INSIGHTS &amp; ARTICLES</span>
            <div className="line"></div>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: "3rem",
              lineHeight: 1.1,
            }}
          >
            Engineering <span style={{ color: "var(--primary)" }}>Blogs</span>
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "2.5rem",
              marginTop: "2rem",
            }}
          >
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                style={{ display: "block", textDecoration: "none", color: "inherit" }}
              >
                <article className="blog-card">
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}>
                    <span className="label" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>{post.label}</span>
                    <h3 style={{ fontSize: "1.3rem", lineHeight: 1.3, fontWeight: 600, color: "#fff" }}>{post.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem", flexGrow: 1 }}>
                      {post.excerpt}
                    </p>
                    <div className="project-tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                      {post.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>{tag}</span>
                      ))}
                    </div>
                    <span
                      className="btn btn-outline"
                      style={{ marginTop: "1rem", display: "inline-block", width: "fit-content", padding: "0.5rem 1rem", fontSize: "0.8rem" }}
                    >
                      Read Full Article
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
