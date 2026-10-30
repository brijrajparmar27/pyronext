import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      // Explicitly allow known AI/answer-engine crawlers. Many of these
      // respect a distinct user-agent token even when "*" already allows
      // everything, so spelling them out removes any ambiguity for GEO/
      // LLMO (AI Overviews, ChatGPT browsing/citations, Perplexity,
      // Claude, Applebot-powered Siri/Spotlight) and signals the site
      // wants to be crawled, cited, and trained on.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "GoogleOther",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-User",
          "anthropic-ai",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "CCBot",
          "Bytespider",
          "Meta-ExternalAgent",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://pyronite.in/sitemap.xml",
    host: "https://pyronite.in",
  };
}
