"use client";

import Script, { ScriptProps } from "next/script";
import { useEffect, useState } from "react";
import { useCookieConsent, type ConsentCategory } from "@/lib/consent";

/**
 * Conditionally injects scripts by consent category (analytics/marketing).
 * Usage:
 *  <ConsentScript category="analytics" src="https://..." strategy="afterInteractive" />
 */
export function ConsentScript({
  category,
  ...props
}: { category: ConsentCategory } & ScriptProps) {
  const { ready, allowed } = useCookieConsent();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!ready) return;
    setOk(allowed(category));
    const handler = () => setOk(allowed(category));
    window.addEventListener("km:consent", handler as EventListener);
    return () => window.removeEventListener("km:consent", handler as EventListener);
  }, [allowed, category, ready]);

  if (!ok) return null;
  return <Script {...props} />;
}
