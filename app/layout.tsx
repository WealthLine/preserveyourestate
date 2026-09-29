import type { Metadata } from "next";
import { display, body } from "./google-fonts";
import Script from "next/script";
import Effects from "@/components/Effects";
import "./globals.css";
import siteConfig from "../data/site-config.json";

const GA_MEASUREMENT_ID = "G-S0DQ7Z2J61";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.brand.displayName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: `${siteConfig.seo.siteUrl}/og?topic=Educational%20Planning%20Resources&label=Massachusetts%20financial%20coordination`,
        width: 1200,
        height: 630,
        alt: "MSA Financial educational planning resources",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Effects />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
