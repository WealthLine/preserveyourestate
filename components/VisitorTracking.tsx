"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { siteManifest } from "@/lib/site-manifest";
import { analyticsAllowed, CONSENT_COOKIE, CONSENT_MAX_AGE, MODE_COOKIE, OPEN_PREFERENCES_EVENT, parseConsent, type ConsentValue, type PrivacyMode } from "@/lib/consent";
import styles from "./VisitorTracking.module.css";

const GA_ID = "G-S0DQ7Z2J61";

function readCookie(name: string): string | null {
  try {
    const cookie = document.cookie.split("; ").find(value => value.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
  } catch { return null; }
}

export default function VisitorTracking() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [mode, setMode] = useState<PrivacyMode>("opt-in");
  const [ready, setReady] = useState(false);
  const [gpc, setGpc] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLElement>(null);
  const openedByVisitor = useRef(false);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const stored = parseConsent(readCookie(CONSENT_COOKIE));
    const signal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    function applyMode(value: PrivacyMode) {
      if (cancelled) return;
      setConsent(stored);
      setMode(value);
      setGpc(signal);
      setReady(true);
      setOpen(stored === null && value === "opt-in");
    }
    const value = readCookie(MODE_COOKIE);
    if (value === "opt-in" || value === "opt-out") {
      const frame = requestAnimationFrame(() => applyMode(value));
      return () => { cancelled = true; cancelAnimationFrame(frame); };
    }
    const override = new URLSearchParams(window.location.search).get("wr-geo");
    fetch(override ? `/api/privacy-mode?wr-geo=${encodeURIComponent(override)}` : "/api/privacy-mode")
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => applyMode(data.mode === "opt-out" ? "opt-out" : "opt-in"))
      .catch(() => applyMode("opt-in"));
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    function showPreferences() {
      trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      openedByVisitor.current = true;
      setOpen(true);
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, showPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, showPreferences);
  }, []);

  useEffect(() => {
    if (open && openedByVisitor.current) dialog.current?.focus();
  }, [open]);

  const allowed = ready && analyticsAllowed(consent, mode, gpc);
  const dismissible = consent !== null || mode === "opt-out";
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  function choose(accept: boolean) {
    const value: ConsentValue = accept ? "analytics:yes" : "analytics:no";
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(value)}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    setConsent(value);
    window.dispatchEvent(new Event("wr:consent-changed"));
    close();
    if (!accept) {
      // Clear this site's first-party tracker state, as Brandywine does on rejection.
      for (const key of ["wr_vid", `wr:visitors:session:${siteManifest.siteId}`, `wr:journey:${siteManifest.siteId}`]) {
        try { window.localStorage.removeItem(key); window.sessionStorage.removeItem(key); } catch { /* Storage may be blocked. */ }
      }
      document.cookie = `wr_vid=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
      if (allowed) window.location.reload();
    }
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
    {ready && open && <section ref={dialog} tabIndex={-1} id="visitor-consent" role="dialog" className={styles.banner} aria-label="Cookie settings"
      onKeyDown={event => { if (event.key === "Escape" && dismissible) close(); }}>
      <p>We use WealthReach and analytics cookies to understand website visits and connect browsing activity with inquiries. {mode === "opt-out" ? "You may opt out at any time using the choices below. " : "You may accept or reject this below and change your choice at any time. "}<a href="/privacy">Privacy policy</a></p>
      <div className={styles.actions}>
        <button type="button" onClick={() => choose(false)}>Reject All</button>
        <button type="button" className={styles.accept} onClick={() => choose(true)}>Accept All</button>
        {dismissible && <button type="button" onClick={close} aria-label="Close cookie settings">Close</button>}
      </div>
    </section>}
  </>;
}
