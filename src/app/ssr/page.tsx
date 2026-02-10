"use client";
import styles from "./ssr.module.css";
import { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

export default function SSRPage() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  const now = new Date().toLocaleString();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-16">
      {!show ? (
        <div className={styles.spinner}></div>
      ) : (
        <div className={styles.fadeIn}>
          <span className={styles.badge}>Renderowane na serwerze (SSR)</span>
          <h2 className="text-3xl font-bold mb-4 text-green-700">SSR (Server Side Rendering)</h2>
          <p className="mb-4 text-lg text-green-900">Ta strona jest renderowana na serwerze przy każdym żądaniu.</p>
          <p className="text-green-800">Aktualny czas (server): <b>{now}</b></p>
        </div>
      )}
    </div>
  );
}
