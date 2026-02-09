"use client";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [now, setNow] = useState("");
  useEffect(() => {
    setNow(new Date().toLocaleString());
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 py-16">
      <h2 className="text-3xl font-bold mb-4 text-yellow-700">CSR (Client Side Rendering)</h2>
      <p className="mb-4 text-lg text-yellow-900">Ta strona jest renderowana po stronie klienta (przeglądarki).</p>
      <p className="text-yellow-800">Aktualny czas (client): <b>{now}</b></p>
    </div>
  );
}
