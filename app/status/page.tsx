export const metadata = {
  title: "Status – Kundenmagnetapp",
  description: "Systemstatus & Verfügbarkeit."
};

export default function StatusPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Status</h1>
      <div className="mt-4 rounded-xl border p-6">
        <div className="text-sm">Dienststatus:</div>
        <div className="mt-1 text-emerald-700">Alle Systeme betriebsbereit.</div>
      </div>
    </main>
  );
}
