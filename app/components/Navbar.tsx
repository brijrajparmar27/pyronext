"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "../data/services";
import * as gtag from "../utils/gtag";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/blogs", label: "Blogs" },
  { href: "/hire-liferay-developers", label: "Build Your Team" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    gtag.event("mobile_menu_toggle", { state: nextState ? "open" : "close" });
  };

  return (
    <nav className={`navbar ${isOpen ? "is-open" : ""}`}>
      <Link
        href="/"
        className="brand"
        onClick={() => {
          setIsOpen(false);
          gtag.event("brand_click", { location: "navbar" });
        }}
      >
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
        {/* Company Dropdown (Mega Dropdown) */}
        <div className="nav-item-dropdown">
          <span className={`nav-dropdown-trigger ${pathname === "/" || pathname === "/standard" || pathname === "/philosophy" ? "active" : ""}`}>
            Company
            <span className="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
          </span>
          <div className="dropdown-menu mega-dropdown">
            <div className="mega-dropdown-grid">
              
              {/* Left Side: Cards */}
              <div className="mega-column-left">
                <Link
                  href="/"
                  className={`dropdown-card ${pathname === "/" ? "active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    gtag.event("nav_click", { label: "Company: About Us", device: "desktop" });
                  }}
                >
                  <div className="card-visual">
                    <span className="material-symbols-outlined">info</span>
                  </div>
                  <div className="card-info">
                    <h4>About Us</h4>
                    <p>We are a high-performance system engineering team building scalable enterprise ecosystems.</p>
                  </div>
                  <span className="material-symbols-outlined arrow">chevron_right</span>
                </Link>

                <Link
                  href="/standard"
                  className={`dropdown-card ${pathname === "/standard" ? "active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    gtag.event("nav_click", { label: "Company: Standards", device: "desktop" });
                  }}
                >
                  <div className="card-visual">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div className="card-info">
                    <h4>Standards</h4>
                    <p>Explore our strict engineering standards, quality compliance, and process pipelines.</p>
                  </div>
                  <span className="material-symbols-outlined arrow">chevron_right</span>
                </Link>

                <Link
                  href="/philosophy"
                  className={`dropdown-card ${pathname === "/philosophy" ? "active" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    gtag.event("nav_click", { label: "Company: Philosophy", device: "desktop" });
                  }}
                >
                  <div className="card-visual">
                    <span className="material-symbols-outlined">psychology</span>
                  </div>
                  <div className="card-info">
                    <h4>Philosophy</h4>
                    <p>Discover our architectural philosophy, open-source adoption, and design ethics.</p>
                  </div>
                  <span className="material-symbols-outlined arrow">chevron_right</span>
                </Link>
              </div>

              {/* Right Side: Info and Contacts */}
              <div className="mega-column-right">
                <div className="company-description">
                  <h3>Enabling Smarter Enterprise Solutions</h3>
                  <p>
                    Pyronite designs and delivers enterprise-grade digital experience systems on Liferay DXP and Next.js, combining disciplined system engineering, headless storefronts, and cloud operations.
                  </p>
                </div>

                <div className="company-contacts">
                  <div className="contact-col">
                    <h5>General Inquiry</h5>
                    <a href="mailto:business@pyronite.in" className="contact-link">
                      <span className="material-symbols-outlined">mail</span>
                      business@pyronite.in
                    </a>
                  </div>
                  <div className="contact-col">
                    <h5>Social Connect</h5>
                    <a
                      href="https://in.linkedin.com/company/pyronite-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                      onClick={() => {
                        setIsOpen(false);
                        gtag.event("social_click", { platform: "LinkedIn", location: "mega_menu" });
                      }}
                    >
                      <span className="material-symbols-outlined">share</span>
                      LinkedIn
                    </a>
                  </div>
                  <div className="contact-col">
                    <h5>Meet Us</h5>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        window.dispatchEvent(new CustomEvent("open-cal-widget"));
                      }}
                      className="contact-link"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        textAlign: "left"
                      }}
                    >
                      <span className="material-symbols-outlined">calendar_month</span>
                      Schedule a Call
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="nav-item-dropdown">
          <Link
            href="/services"
            className={`nav-dropdown-trigger ${pathname.startsWith("/services") ? "active" : ""}`}
            onClick={() => gtag.event("nav_click", { label: "Services Main", device: "desktop" })}
          >
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
                  onClick={() => gtag.event("nav_click", { label: `Service: ${service.title}`, device: "desktop" })}
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

        {/* Solutions, Blogs, Build Your Team, Connect */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname.startsWith(link.href) ? "active" : ""}
            onClick={() => gtag.event("nav_click", { label: link.label, device: "desktop" })}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button className="nav-toggle" onClick={handleToggle} aria-label="Toggle menu">
        <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
      </button>

      <div className={`mobile-overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}>
        <button className="mobile-close" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="mobile-nav" onClick={(e) => e.stopPropagation()}>
          {/* Mobile Company Collapsible */}
          <div className="mobile-services-collapsible">
            <button
              className={`mobile-services-trigger ${pathname === "/" || pathname === "/standard" || pathname === "/philosophy" ? "active" : ""}`}
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
            >
              <span className="label">[COMPANY]</span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <span>Company</span>
                <span className={`material-symbols-outlined mobile-arrow ${mobileCompanyOpen ? "rotated" : ""}`}>
                  keyboard_arrow_down
                </span>
              </div>
            </button>
            <div className={`mobile-services-list ${mobileCompanyOpen ? "expanded" : ""}`}>
              <Link
                href="/"
                onClick={() => {
                  setIsOpen(false);
                  gtag.event("nav_click", { label: "Company: About Us", device: "mobile" });
                }}
                className={`mobile-service-link ${pathname === "/" ? "active" : ""}`}
              >
                <span className="material-symbols-outlined mobile-item-icon">info</span>
                About Us
              </Link>
              <Link
                href="/standard"
                onClick={() => {
                  setIsOpen(false);
                  gtag.event("nav_click", { label: "Company: Standards", device: "mobile" });
                }}
                className={`mobile-service-link ${pathname === "/standard" ? "active" : ""}`}
              >
                <span className="material-symbols-outlined mobile-item-icon">verified</span>
                Standards
              </Link>
              <Link
                href="/philosophy"
                onClick={() => {
                  setIsOpen(false);
                  gtag.event("nav_click", { label: "Company: Philosophy", device: "mobile" });
                }}
                className={`mobile-service-link ${pathname === "/philosophy" ? "active" : ""}`}
              >
                <span className="material-symbols-outlined mobile-item-icon">psychology</span>
                Philosophy
              </Link>
            </div>
          </div>

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
                onClick={() => {
                  setIsOpen(false);
                  gtag.event("nav_click", { label: "Services Main", device: "mobile" });
                }}
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
                  onClick={() => {
                    setIsOpen(false);
                    gtag.event("nav_click", { label: `Service: ${service.title}`, device: "mobile" });
                  }}
                  className={`mobile-service-link ${pathname === `/services/${service.slug}` ? "active" : ""}`}
                >
                  <span className="material-symbols-outlined mobile-item-icon">{service.icon}</span>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Solutions, Blogs, Build Your Team, Connect */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                gtag.event("nav_click", { label: link.label, device: "mobile" });
              }}
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
