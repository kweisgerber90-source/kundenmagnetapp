import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/site-logo";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <SiteLogo />
            <span className="font-semibold">Kundenmagnetapp</span>
          </div>
          <nav className="flex items-center gap-4">
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#features">
              Funktionen
            </a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#pricing">
              Preise
            </a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#docs">
              Dokumentation
            </a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#login">
              Anmelden
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b bg-slate-50">
        <div className="container py-16 md:py-24">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            Kundenbewertungen sammeln & einbinden — ohne E-Mail-Ping-Pong.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Sammeln Sie echte Testimonials per Link oder QR, moderieren Sie mit einem Klick und
            binden Sie freigegebene Bewertungen automatisch als Widget ein. DSGVO-konform für DACH.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <a href="#signup" aria-label="Kostenlos testen">14 Tage kostenlos testen</a>
            </Button>
            <a
              href="#demo"
              className="btn-primary bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100"
            >
              Live-Vorschau ansehen
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="container py-12 md:py-16">
        <h2 className="text-2xl font-semibold">Warum Kundenmagnetapp?</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-xl border p-5">
            <div className="font-medium">Schnelle Sammlung</div>
            <p className="text-sm text-slate-600">
              Link oder QR teilen, Feedback kommt direkt in Ihre Moderation.
            </p>
          </li>
          <li className="rounded-xl border p-5">
            <div className="font-medium">Moderation & Freigabe</div>
            <p className="text-sm text-slate-600">
              Pending, Freigeben, Verbergen—volle Kontrolle über Sichtbarkeit.
            </p>
          </li>
          <li className="rounded-xl border p-5">
            <div className="font-medium">Einbettbares Widget</div>
            <p className="text-sm text-slate-600">
              Genehmigte Testimonials automatisch auf Ihrer Website anzeigen.
            </p>
          </li>
        </ul>
      </section>

      <footer className="border-t">
        <div className="container flex flex-col items-start gap-2 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Kundenmagnetapp</div>
          <nav className="flex gap-4">
            <a href="#impressum" className="hover:text-slate-900">Impressum</a>
            <a href="#datenschutz" className="hover:text-slate-900">Datenschutzerklärung</a>
            <a href="#agb" className="hover:text-slate-900">AGB</a>
            <a href="#status" className="hover:text-slate-900">Status</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
