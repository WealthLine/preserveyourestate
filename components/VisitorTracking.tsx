"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { siteManifest } from "@/lib/site-manifest";
import styles from "./VisitorTracking.module.css";

const COOKIE = "wr_consent";
const MAX_AGE = 60 * 60 * 24 * 180;
const GA_ID = "G-S0DQ7Z2J61";

export default function VisitorTracking() {
  const [allowed, setAllowed] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const cookie = document.cookie.split("; ").find(value => value.startsWith(`${COOKIE}=`));
    const consent = cookie ? decodeURIComponent(cookie.slice(COOKIE.length + 1)) : null;
    const frame = requestAnimationFrame(() => {
      setAllowed(consent === "analytics:yes");
      setOpen(!consent);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function choose(accept: boolean) {
    const value = accept ? "analytics:yes" : "analytics:no";
    document.cookie = `${COOKIE}=${encodeURIComponent(value)}; Max-Age=${MAX_AGE}; Path=/; Secure; SameSite=Lax`;
    window.dispatchEvent(new Event("wr:consent-changed"));
    setOpen(false);
    if (!accept && allowed) {
      // Reload removes scripts and listeners already loaded with earlier consent.
      window.location.reload();
      return;
    }
    setAllowed(accept);
  }

  return <>
    {allowed && <>
      <Script id="wr-site-script" src={siteManifest.visitors.siteScriptUrl} strategy="afterInteractive" data-consent-category="analytics" />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </>}
    <button type="button" className={styles.choices} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="visitor-consent">Privacy choices</button>
    {open && <section id="visitor-consent" className={styles.banner} aria-label="Cookie preferences">
      <p>With your permission, we use WealthReach and analytics cookies to understand website visits and connect browsing activity with inquiries. <a href="/privacy">Privacy policy</a></p>
      <div className={styles.actions}>
        <button type="button" onClick={() => choose(false)}>Decline analytics</button>
        <button type="button" className={styles.accept} onClick={() => choose(true)}>Allow analytics</button>
      </div>
    </section>}
  </>;
}
