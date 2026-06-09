import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TopStrip from "./components/TopStrip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    siteName: "Pyronite",
    locale: "en_US",
    url: BASE_URL,
    title: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
    description:
      "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends.",
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
    title: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
    description:
      "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends.",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <TopStrip />
        <Navbar />
        <main
          style={{
            paddingTop: "calc(var(--nav-height) + 36px)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
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

            gtag('config', 'G-PSX0G5C1CF');
          `}
        </Script>
      </body>
    </html>
  );
}
