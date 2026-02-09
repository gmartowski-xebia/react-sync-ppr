import { Suspense } from "react";

function PPRDynamicPart() {
  // Tu symulujemy dynamiczny fragment (np. pobieranie danych)
  const now = new Date().toLocaleString();
  return (
    <div className="mt-4 p-4 rounded bg-pink-100 text-pink-800">
      <b>Dynamiczna część (renderowana na żądanie):</b> {now}
    </div>
  );
}

export default function PPRPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 py-16">
      <h2 className="text-3xl font-bold mb-4 text-pink-700">PPR (Partial Prerendering)</h2>
      <p className="mb-4 text-lg text-pink-900">Ta strona łączy statyczny i dynamiczny rendering (eksperymentalna funkcja Next.js).</p>
      <div className="p-4 rounded bg-pink-200 text-pink-900">Statyczna część (prerenderowana w buildzie)</div>
      <Suspense fallback={<div className="mt-4 p-4 rounded bg-pink-300 text-pink-900">Ładowanie dynamicznej części...</div>}>
        <PPRDynamicPart />
      </Suspense>
    </div>
  );
}
