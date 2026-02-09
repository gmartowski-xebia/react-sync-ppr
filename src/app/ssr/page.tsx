export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const now = new Date().toLocaleString();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-16">
      <h2 className="text-3xl font-bold mb-4 text-green-700">SSR (Server Side Rendering)</h2>
      <p className="mb-4 text-lg text-green-900">Ta strona jest renderowana na serwerze przy każdym żądaniu.</p>
      <p className="text-green-800">Aktualny czas (server): <b>{now}</b></p>
    </div>
  );
}
