export const metadata = {
  title: "Dokumentation – Kundenmagnetapp",
  description: "Kurzanleitung & Einbindung des Widgets."
};

export default function DocsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Dokumentation</h1>
      <p className="mt-2 text-slate-600">
        Hier finden Sie die Anleitung zur Einrichtung, Moderation und Einbettung.
      </p>
      <ol className="mt-6 list-decimal pl-5 text-sm">
        <li>Registrieren & Anmeldung</li>
        <li>Kampagne erstellen</li>
        <li>Link/QR teilen und Bewertungen sammeln</li>
        <li>Freigeben und Widget einbinden</li>
      </ol>
    </main>
  );
}
