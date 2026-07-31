"use client";

import Link from "next/link";
import * as gtag from "../utils/gtag";

interface TrackedLinkProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  eventLabel: string;
  eventCategory?: string;
}

export default function TrackedLink({
  href,
  className,
  style,
  children,
  eventLabel,
  eventCategory = "CTA",
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={() =>
        gtag.event("cta_click", {
          event_label: eventLabel,
          event_category: eventCategory,
        })
      }
    >
      {children}
    </Link>
  );
}
