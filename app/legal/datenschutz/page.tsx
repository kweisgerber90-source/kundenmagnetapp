export const metadata = {
  title: "Datenschutzerklärung – Kundenmagnetapp",
  description: "Informationen gemäß DSGVO & TTDSG."
};

export default function DatenschutzPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>
      <p className="mt-4 text-sm text-slate-700">
        Wir verarbeiten personenbezogene Daten ausschließlich innerhalb der EU (Frankfurt).
        Essenzielle Cookies sind erforderlich; Analytik/Marketing nur mit Einwilligung.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Cookies</h2>
      <p className="mt-2 text-sm text-slate-700">
        Ihre Einwilligung wird mit Zeitstempel lokal gespeichert; Widerruf jederzeit möglich.
      </p>
    </main>
  );
}
