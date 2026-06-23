"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "../data/services";

const navLinks = [
  { href: "/", label: "Intro" },
  { href: "/standard", label: "Standard" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/blogs", label: "Blogs" },
  { href: "/hire-liferay-developers", label: "Build Your Team" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className={`navbar ${isOpen ? "is-open" : ""}`}>
      <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
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
        {/* Intro */}
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Intro
        </Link>

        {/* Services Dropdown */}
        <div className="nav-item-dropdown">
          <Link href="/services" className={`nav-dropdown-trigger ${pathname.startsWith("/services") ? "active" : ""}`}>
            Services
            <span className="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
          </Link>
          <div className="dropdown-menu">
            <div className="dropdown-grid">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`dropdown-item ${pathname === `/services/${service.slug}` ? "active" : ""}`}
                >
                  <span className="material-symbols-outlined item-icon">{service.icon}</span>
                  <div className="item-details">
                    <span className="item-title">{service.title}</span>
                    <span className="item-desc">{service.shortDescription}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Standard, Philosophy, Blogs, Connect */}
        {navLinks.slice(1).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname.startsWith(link.href) ? "active" : ""}
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
          {/* Mobile Intro */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={pathname === "/" ? "active" : ""}
          >
            <span className="label">[INTRO]</span>
            Intro
          </Link>

          {/* Mobile Services Collapsible */}
          <div className="mobile-services-collapsible">
            <button
              className={`mobile-services-trigger ${pathname.startsWith("/services") ? "active" : ""}`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span className="label">[SERVICES]</span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <span>Services</span>
                <span className={`material-symbols-outlined mobile-arrow ${mobileServicesOpen ? "rotated" : ""}`}>
                  keyboard_arrow_down
                </span>
              </div>
            </button>
            <div className={`mobile-services-list ${mobileServicesOpen ? "expanded" : ""}`}>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`mobile-service-link ${pathname === "/services" ? "active" : ""}`}
                style={{ fontWeight: 700, color: "var(--primary)" }}
              >
                <span className="material-symbols-outlined mobile-item-icon">apps</span>
                View All Services
              </Link>
              <div style={{ height: "1px", background: "var(--border-light)", margin: "0.25rem 0" }} />
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-service-link ${pathname === `/services/${service.slug}` ? "active" : ""}`}
                >
                  <span className="material-symbols-outlined mobile-item-icon">{service.icon}</span>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Standard, Philosophy, Blogs, Connect */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={pathname.startsWith(link.href) ? "active" : ""}
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

