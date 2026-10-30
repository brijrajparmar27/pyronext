import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundFrameCanvas from "./components/background/BackgroundFrameCanvas";
import ParticlesBackdrop from "./components/background/ParticlesBackdrop";
import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker";
import ScheduleMeetingWidget from "./components/ScheduleMeetingWidget";
import GSAPScrollTrigger from "./components/GSAPScrollTrigger";
import ScrollReveal from "./components/ScrollReveal";
import JsonLd from "./components/JsonLd";
import { organizationSchema, websiteSchema } from "./utils/schema";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://pyronite.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
    template: "%s | Pyronite Tech",
  },
  description:
    "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends. We forge complex enterprise portals and scalable web infrastructure from the ground up.",
  keywords: [
    "Pyronite Tech",
    "Liferay DXP",
    "Enterprise Portals",
    "Headless Liferay",
    "Open-Source Systems",
    "Microservices Integration",
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
    locale: "en_US",
    url: BASE_URL,
    title: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
    description:
      "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends.",
    siteName: "Pyronite Tech",
    // Image intentionally omitted: app/opengraph-image.tsx (and
    // twitter-image.tsx) generate a branded 1200x630 card per route via
    // next/og, which Next.js wires up automatically as long as no page
    // in the tree declares its own openGraph/twitter `images`.
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
    description:
      "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body>
        <GoogleAnalyticsTracker />
        <GSAPScrollTrigger />
        <ScrollReveal />
        <ScheduleMeetingWidget />
        <BackgroundFrameCanvas />
        <ParticlesBackdrop />
        <Navbar />
        <main
          style={{
            paddingTop: "var(--nav-height)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1, // ensure DOM is above canvas
          }}
        >
          <div style={{ flexGrow: 1 }}>{children}</div>
          <Footer />
        </main>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PSX0G5C1CF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </body>
    </html>
  );
}
