export const metadata = {
  title: "Impressum – Kundenmagnetapp",
  description: "Impressum nach §5 TMG."
};

export default function ImpressumPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Impressum</h1>
      <p className="mt-4 text-sm text-slate-700">
        Verantwortlich für den Inhalt: Kundenmagnetapp – Musterstraße 1, 97000 Würzburg, Deutschland.
      </p>
      <p className="mt-2 text-sm text-slate-700">E-Mail: support@kundenmagnet-app.de</p>
      <p className="mt-2 text-sm text-slate-700">USt-IdNr.: folgt</p>
    </main>
  );
}
