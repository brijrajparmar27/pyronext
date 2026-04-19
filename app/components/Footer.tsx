import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: "4rem" }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="/" className="brand" style={{ marginBottom: "1rem", display: "inline-block", textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Image 
                  src="/logo.png" 
                  alt="Pyronite Logo" 
                  width={32} 
                  height={32} 
                  className="logo" 
                  style={{ objectFit: "contain" }} 
                />
                <span style={{ fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--text-primary)" }}>
                  PYRONITE
                </span>
              </div>
            </Link>
            <p style={{ textTransform: "none", marginTop: "1rem", lineHeight: "1.6" }}>
              Specialized Liferay DXP & Portal Solutions driving enterprise digital transformation.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <h4>A Subsidiary Of</h4>
              <a 
                href="https://codealchemy.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: "var(--primary)", 
                  fontSize: "0.85rem", 
                  textTransform: "uppercase", 
                  letterSpacing: "2px", 
                  fontWeight: 600,
                  transition: "color 0.3s"
                }}
              >
                CodeAlchemy
              </a>
            </div>
          </div>
          
          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column' }}>
            <h4>Navigation</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem", padding: 0 }}>
              <li>
                <Link href="/" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s" }} className="hover-text-primary">Intro</Link>
              </li>
              <li>
                <Link href="/standard" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s" }} className="hover-text-primary">Standard</Link>
              </li>
              <li>
                <Link href="/philosophy" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s" }} className="hover-text-primary">Philosophy</Link>
              </li>
              <li>
                <Link href="/connect" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s" }} className="hover-text-primary">Connect</Link>
              </li>
              <li>
                <Link href="/blogs" style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", transition: "color 0.3s" }} className="hover-text-primary">Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col" style={{ display: 'flex', flexDirection: 'column' }}>
            <h4>Connect</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem", padding: 0 }}>
              <li>
                <a 
                  href="mailto:business@pyronite.in" 
                  style={{ color: "var(--text-muted)", fontSize: "0.85rem", textTransform: "lowercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s" }}
                  className="hover-text-primary"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "1.2rem", color: "var(--primary)" }}>mail</span>
                  business@pyronite.in
                </a>
              </li>
              <li>
                <a 
                  href="https://in.linkedin.com/company/pyronite-tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, transition: "color 0.3s" }}
                  title="Pyronite LinkedIn"
                  className="hover-text-primary"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "1.2rem", color: "var(--primary)" }}>open_in_new</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-light)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Pyronite. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
             <Link href="/terms" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", transition: "color 0.3s" }} className="hover-text-primary">
               Terms &amp; Conditions
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
