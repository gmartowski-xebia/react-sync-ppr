import { Suspense } from "react";
import styles from "./ppr.module.css";
import dynamicPart from "./pprDynamicPart";

function Spinner() {
  return (
    <svg className="animate-spin h-6 w-6 text-pink-500 mr-2 inline-block" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

export default function PPRPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 py-16">
      <h2 className="text-3xl font-bold mb-4 text-pink-700">PPR (Partial Prerendering)</h2>
      <p className="mb-4 text-lg text-pink-900">Ta strona łączy statyczny i dynamiczny rendering (eksperymentalna funkcja Next.js).</p>
      <div className="p-4 rounded bg-pink-200 text-pink-900 mb-2 flex items-center gap-2">
        <span className="inline-block px-2 py-1 text-xs rounded bg-pink-400 text-pink-900 mr-2">Statyczna część</span>
        Statyczna część (prerenderowana w buildzie)
      </div>
      <Suspense fallback={
        <div className="mt-4 p-4 rounded bg-pink-300 text-pink-900 flex items-center gap-2 animate-pulse">
          <Spinner />
          <span className="inline-block px-2 py-1 text-xs rounded bg-pink-400 text-pink-900 mr-2">Dynamiczna część ładuje się…</span>
          Ładowanie dynamicznej części...
        </div>
      }>
        {dynamicPart()}
      </Suspense>
    </div>
  );
}
