"use client";
import { useState } from "react";

export default function PriceChangerGood() {
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/set-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: Number(val) }),
      });
      if (!res.ok) throw new Error("Błąd API: " + res.status);
      window.location.reload();
    } catch (err: any) {
      setError(err.message || "Błąd zmiany ceny");
    } finally {
      setLoading(false);
      setVal("");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <input
        type="number"
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder="Nowa cena"
        disabled={loading}
      />
      <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>
        {loading ? "Ustawianie..." : "Zmień cenę"}
      </button>
      {error && <span style={{ color: "red", marginLeft: 12 }}>{error}</span>}
    </form>
  );
}

