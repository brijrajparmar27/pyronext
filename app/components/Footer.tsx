import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        marginTop: "4rem",
        borderTop: "1px solid var(--border-light)",
        textAlign: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
        color: "var(--text-muted)",
      }}
    >
      <p>
        &copy; 2026 Pyronite. All rights reserved. |{" "}
        <Link
          href="/terms"
          style={{ color: "var(--primary)", textDecoration: "none" }}
        >
          Terms &amp; Conditions
        </Link>
      </p>
    </footer>
  );
}
