import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import blogsData from "../data/blogs.json";
import type { BlogPost } from "../data/types";

export const metadata: Metadata = {
  title: "Engineering Blogs & Insights",
  description:
    "Explore Pyronite's engineering blogs on advanced Liferay DXP implementations, headless architecture, and connecting native AI protocols.",
  keywords: [
    "Pyronite Blogs",
    "Liferay DXP",
    "Liferay Development",
    "Liferay Integration",
    "Liferay AI",
    "Enterprise Architecture",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: "Engineering Blogs & Insights | Pyronite",
    description:
      "Explore Pyronite's engineering blogs on advanced Liferay DXP implementations and headless architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blogs & Insights | Pyronite",
    description:
      "Explore Pyronite's engineering blogs on advanced Liferay DXP implementations and headless architecture.",
  },
};

const blogs = blogsData as BlogPost[];

export default function BlogsPage() {
  return (
    <>
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

          <div className="projects">
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                style={{ display: "block", textDecoration: "none", color: "inherit" }}
              >
                <article
                  className="project-row"
                  style={{
                    cursor: "pointer",
                    alignItems: "center",
                    gridTemplateColumns: "1fr",
                  }}
                >
                  <div className="project-info">
                    <span className="label">{post.label}</span>
                    <h3 style={{ margin: "1rem 0" }}>{post.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                      {post.excerpt}
                    </p>
                    <div className="project-tags" style={{ marginTop: "1.5rem" }}>
                      {post.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span
                      className="btn btn-outline"
                      style={{ marginTop: "2rem", display: "inline-block" }}
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
