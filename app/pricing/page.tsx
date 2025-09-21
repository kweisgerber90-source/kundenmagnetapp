export const metadata = {
  title: "Preise – Kundenmagnetapp",
  description: "Transparente Preise für DACH – inkl. Testphase."
};

export default function PricingPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Preise</h1>
      <p className="mt-2 text-slate-600">14 Tage kostenlos testen. Keine Kreditkarte erforderlich.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          <div className="text-sm font-semibold">Starter</div>
          <div className="mt-2 text-3xl font-bold">€9<span className="text-base font-normal">/Monat</span></div>
          <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
            <li>1 Kampagne</li>
            <li>50 Testimonials/Monat</li>
            <li>Basis-Widget</li>
          </ul>
          <a href="/#signup" className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
            Jetzt starten
          </a>
        </div>
        <div className="rounded-xl border p-6">
          <div className="text-sm font-semibold">Pro</div>
          <div className="mt-2 text-3xl font-bold">€29<span className="text-base font-normal">/Monat</span></div>
          <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
            <li>5 Kampagnen</li>
            <li>500 Testimonials/Monat</li>
            <li>Widget-Themes & CSV-Export</li>
          </ul>
          <a href="/#signup" className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
            Kostenlos testen
          </a>
        </div>
        <div className="rounded-xl border p-6">
          <div className="text-sm font-semibold">Business</div>
          <div className="mt-2 text-3xl font-bold">€79<span className="text-base font-normal">/Monat</span></div>
          <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
            <li>Unbegrenzte Kampagnen</li>
            <li>Unbegrenzt freigegebene Widgets</li>
            <li>Priorisierter Support</li>
          </ul>
          <a href="/#signup" className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
            Angebot anfragen
          </a>
        </div>
      </div>

      <p className="mt-6 text-xs text-slate-500">Alle Preise zzgl. USt. (sofern anwendbar).</p>
    </main>
  );
}
