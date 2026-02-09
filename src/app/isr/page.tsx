export const revalidate = 10;

export default function ISRPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 py-16">
      <h2 className="text-3xl font-bold mb-4 text-purple-700">ISR (Incremental Static Regeneration)</h2>
      <p className="mb-4 text-lg text-purple-900">Ta strona jest regenerowana co 10 sekund na serwerze.</p>
      <p className="text-purple-800">Aktualny czas (build/regeneration): <b>{new Date().toLocaleString()}</b></p>
    </div>
  );
}
