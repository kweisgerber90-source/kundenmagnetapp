"use client";

import { useCookieConsent } from "@/lib/consent";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const { ready, state, acceptAll, denyNonEssential, update } = useCookieConsent();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!ready) return;
    // Show banner if analytics/marketing are not decided (both false and no timestamp)
    const undecided = !state.timestamp;
    setOpen(undecided);
  }, [ready, state.timestamp]);

  if (!ready || !open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 m-3 rounded-xl border bg-white p-4 shadow-xl md:max-w-3xl md:mx-auto">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-1 text-sm font-semibold">Cookies & Dienste</div>
          <p className="text-sm text-slate-600">
            Wir verwenden essenzielle Cookies für den Betrieb. Optional können Sie Analytik und
            Marketing aktivieren. Details siehe{" "}
            <a className="underline" href="/legal/datenschutz" target="_blank" rel="noreferrer">
              Datenschutzerklärung
            </a>
            .
          </p>
          <div className="mt-2 flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                defaultChecked={state.analytics}
                onChange={(e) => update({ analytics: e.target.checked })}
              />
              Analytik
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                defaultChecked={state.marketing}
                onChange={(e) => update({ marketing: e.target.checked })}
              />
              Marketing
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
            onClick={() => {
              denyNonEssential();
              setOpen(false);
            }}
          >
            Nur essenziell
          </button>
          <button
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
            onClick={() => {
              acceptAll();
              setOpen(false);
            }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
