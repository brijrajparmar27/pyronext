import Image from "next/image";
import type { ContentBlock } from "../data/types";

interface Props {
  blocks: ContentBlock[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[-\s]+/g, "-");
}

export default function BlogRenderer({ blocks }: Props) {
  return (
    <div className="blog-content">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );

          case "heading": {
            const Tag = `h${block.level}` as "h2" | "h3" | "h4";
            return <Tag key={index} id={slugify(block.text)}>{block.text}</Tag>;
          }

          case "list":
            return block.ordered ? (
              <ol key={index}>
                {block.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            ) : (
              <ul key={index}>
                {block.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );

          case "code":
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1.5rem 0",
                  width: "100%",
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    maxWidth: "100%",
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  <code>{block.code}</code>
                </pre>
              </div>
            );

          case "image":
            return (
              <div
                key={index}
                style={{
                  margin: "2.5rem auto",
                  maxWidth: "720px",
                  border: "1px solid var(--border-light)",
                  padding: 5,
                  background: "#000",
                }}
              >
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={1200}
                  height={600}
                  sizes="(max-width: 800px) 100vw, 720px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  unoptimized
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.85rem",
                    marginTop: "1rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {block.caption}
                </p>
              </div>
            );

          case "blockquote":
            return (
              <blockquote
                key={index}
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            );
          
          case "table":
            return (
              <div key={index} className="table-wrapper">
                <table className="blog-table">
                  <thead>
                    <tr>
                      {block.headers.map((header, i) => (
                        <th key={i} dangerouslySetInnerHTML={{ __html: header }} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "hr":
            return <hr key={index} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
