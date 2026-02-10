"use client";
import styles from "./isr.module.css";
import { useState } from "react";

interface ISRClientProps {
  author: string;
  image: string;
  buildTime: string;
  error: boolean;
  name: string;
}

export default function ISRClient({ image, author, buildTime, error, name }: ISRClientProps) {
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-purple-50 py-16 ${styles.fadeIn}`}>
      <span className={styles.badge}>Regenerowane co 10 sekund (ISR)</span>
      <h2 className="text-3xl font-bold mb-4 text-purple-700">ISR (Incremental Static Regeneration)</h2>
      <p className="mb-4 text-lg text-purple-900">Ta strona jest regenerowana co 10 sekund na serwerze.</p>
      <div className="mb-6 max-w-xl text-center">
        <div className="mb-2 text-purple-700 text-sm">Wylosowana postać: <b>{name}</b></div>
        <img src={image} alt={author} width={200} height={200} style={{borderRadius: '1rem', margin: '0 auto'}} />
        <div className="mt-2 text-purple-800 font-semibold">{author}</div>
        {error && <div className="text-red-600 mt-2">Nie udało się pobrać danych z API lub brak postaci.</div>}
      </div>
      <p className="text-purple-800 mb-2">Czas wygenerowania (build/regeneration): <b>{buildTime}</b></p>
      <button onClick={handleRefresh} className="mt-4 px-4 py-2 rounded bg-purple-700 text-white hover:bg-purple-900 transition">
        Odśwież stronę
      </button>
      {loading && <div className={styles.spinner}></div>}
      <div className="mt-6 text-xs text-purple-500 max-w-md text-center">
        <b>Jak to działa?</b> Przez 10 sekund od wygenerowania tej strony ("Czas wygenerowania") każda osoba zobaczy ten sam obrazek i dane. Po 10 sekundach, przy kolejnym wejściu lub odświeżeniu, Next.js pobierze nowe dane i wygeneruje nową wersję strony.
      </div>
    </div>
  );
}
