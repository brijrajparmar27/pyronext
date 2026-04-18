import type { Metadata } from "next";
import "./globals.css";
import TopStrip from "./components/TopStrip";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Pyronite | Specialized Liferay DXP & Portal Solutions",
  description:
    "Sculpt your digital ecosystem natively with Pyronite's specialized Liferay DXP engineers. We deliver state-of-the-art Liferay enterprise portals, headless architectures, and immutable scalable infrastructure.",
  keywords:
    "Pyronite, Liferay DXP, Liferay Experts, Enterprise Portals, Headless Liferay, Liferay Consulting, Digital Business Platforms",
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
