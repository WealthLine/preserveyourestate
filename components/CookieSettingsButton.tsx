"use client";

import { OPEN_PREFERENCES_EVENT } from "@/lib/consent";
import styles from "./VisitorTracking.module.css";

export default function CookieSettingsButton() {
  return <button type="button" className={styles.settings} aria-haspopup="dialog"
    onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}>Cookie Settings</button>;
}
