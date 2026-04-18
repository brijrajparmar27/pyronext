import type { Metadata } from "next";
import "./globals.css";
import TopStrip from "./components/TopStrip";
import Navbar from "./components/Navbar";

const BASE_URL = "https://pyronite.codealchemy.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pyronite | Specialized Liferay DXP & Portal Solutions",
    template: "%s | Pyronite",
  },
  description:
    "Sculpt your digital ecosystem natively with Pyronite's specialized Liferay DXP engineers. We deliver state-of-the-art Liferay enterprise portals, headless architectures, and immutable scalable infrastructure.",
  keywords: [
    "Pyronite",
    "Liferay DXP",
    "Liferay Experts",
    "Enterprise Portals",
    "Headless Liferay",
    "Liferay Consulting",
    "Digital Business Platforms",
    "Digital Ecosystem",
    "Web Engineering",
    "System Integrators",
  ],
  authors: [{ name: "Pyronite", url: BASE_URL }],
  creator: "Pyronite",
  publisher: "Pyronite",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Pyronite",
    locale: "en_US",
    url: BASE_URL,
    title: "Pyronite | Specialized Liferay DXP & Portal Solutions",
    description:
      "Sculpt your digital ecosystem natively with specialized Liferay DXP engineers.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Pyronite Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyronite | Specialized Liferay DXP & Portal Solutions",
    description:
      "Sculpt your digital ecosystem natively with specialized Liferay DXP engineers.",
    images: ["/logo.png"],
    creator: "@pyronite",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <TopStrip />
        <Navbar />
        <main style={{ paddingTop: "calc(var(--nav-height) + 36px)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
