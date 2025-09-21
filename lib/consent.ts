"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export type ConsentCategory = "essential" | "analytics" | "marketing";

export type ConsentState = {
  essential: boolean; // essential is always true by TTDSG
  analytics: boolean;
  marketing: boolean;
  timestamp?: string; // ISO
  textSnapshot?: string; // versioned consent text
  version: number; // bump when text changes
};

const STORAGE_KEY = "km_consent_v1";
const CONSENT_VERSION = 1;

const DEFAULT_STATE: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  version: CONSENT_VERSION
};

export function useCookieConsent() {
  const [state, setState] = useState<ConsentState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentState;
        if (parsed.version === CONSENT_VERSION) {
          setState({ ...parsed, essential: true });
        } else {
          // version bump -> reset non-essential
          setState(DEFAULT_STATE);
        }
      }
    } catch {
      // ignore
    } finally {
      setReady(true);
    }
  }, []);

  const save = useCallback((next: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setState(next);
    // Notify listeners (e.g., ConsentScript) that consent changed
    window.dispatchEvent(new CustomEvent("km:consent", { detail: next }));
  }, []);

  const acceptAll = useCallback(() => {
    const next: ConsentState = {
      essential: true,
      analytics: true,
      marketing: true,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      textSnapshot:
        "Kundenmagnetapp Cookie-Einwilligung: Essenziell, Analytik, Marketing. Version 1 (TTDSG)."
    };
    save(next);
  }, [save]);

  const denyNonEssential = useCallback(() => {
    const next: ConsentState = {
      essential: true,
      analytics: false,
      marketing: false,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      textSnapshot:
        "Kundenmagnetapp Cookie-Einwilligung: Nur essenziell. Version 1 (TTDSG)."
    };
    save(next);
  }, [save]);

  const update = useCallback(
    (patch: Partial<ConsentState>) => {
      const next = { ...state, ...patch, essential: true, version: CONSENT_VERSION };
      save(next);
    },
    [save, state]
  );

  const allowed = useCallback(
    (category: ConsentCategory) => {
      if (category === "essential") return true;
      return Boolean(state[category]);
    },
    [state]
  );

  return useMemo(
    () => ({ ready, state, acceptAll, denyNonEssential, update, allowed }),
    [ready, state, acceptAll, denyNonEssential, update, allowed]
  );
}
