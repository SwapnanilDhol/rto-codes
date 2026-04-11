import type { Metadata, Viewport } from "next";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import SiteNav from "@/components/SiteNav";
import { absoluteOgImageUrl, absoluteTwitterImageUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const themeInitScript = `
  try {
    var storedTheme = localStorage.getItem("rto-theme");
    var resolvedTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.dataset.theme = resolvedTheme;
  } catch (error) {}
`;

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "RTO.codes | India RTO Code Lookup",
    template: "%s | RTO.codes",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  category: "reference",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "RTO.codes | India RTO Code Lookup",
    description: siteConfig.description,
    locale: siteConfig.locale,
    images: [
      {
        url: absoluteOgImageUrl,
        width: 1200,
        height: 630,
        alt: "RTO.codes social preview card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTO.codes | India RTO Code Lookup",
    description: siteConfig.description,
    images: [absoluteTwitterImageUrl],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const logoUrl = `${siteConfig.url}/icon.svg`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <meta property="og:logo" content={logoUrl} />
      </head>
      <body className="h-full antialiased">
        <ThemeProvider>
          <SiteNav />
          {children}
        </ThemeProvider>
        <GoogleAnalytics measurementId={gaId} />
      </body>
    </html>
  );
}
