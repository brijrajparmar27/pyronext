"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useState } from "react";

const navLinks = [
  { href: "/", label: "Intro" },
  { href: "/standard", label: "Standard" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/connect", label: "Connect" },
  { href: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${isOpen ? "is-open" : ""}`}>
      <Link href="/" className="brand">
        <Image
          src="/logo.png"
          alt="Pyronite Logo"
          width={32}
          height={32}
          className="logo"
          style={{ objectFit: "contain" }}
          priority
        />
        PYRONITE
      </Link>

      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              link.href === "/"
                ? pathname === "/"
                  ? "active"
                  : ""
                : pathname.startsWith(link.href)
                ? "active"
                : ""
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
      </button>

      <div className={`mobile-overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}>
        <button className="mobile-close" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="mobile-nav" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={
                link.href === "/"
                  ? pathname === "/"
                    ? "active"
                    : ""
                  : pathname.startsWith(link.href)
                  ? "active"
                  : ""
              }
            >
              <span className="label">[{link.label.toUpperCase()}]</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
