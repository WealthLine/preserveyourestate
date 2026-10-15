import type { Metadata } from "next";
import { display, body } from "./google-fonts";
import VisitorTracking from "@/components/VisitorTracking";
import Effects from "@/components/Effects";
import "./globals.css";
import { brand, seo } from "@/lib/site-manifest";


export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: seo.siteUrl,
    siteName: brand.displayName,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [
      {
        url: `${seo.siteUrl}/og?topic=Educational%20Planning%20Resources&label=Massachusetts%20financial%20coordination`,
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
        <VisitorTracking />
      </body>
    </html>
  );
}
