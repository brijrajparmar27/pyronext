"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Intro" },
  { href: "/standard", label: "Standard" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/connect", label: "Connect" },
  { href: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        <Image
          src="/logo.png"
          alt="Pyronite Logo"
          width={32}
          height={32}
          className="logo"
          style={{ objectFit: "contain" }}
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
      <div className="nav-meta"></div>
    </nav>
  );
}
