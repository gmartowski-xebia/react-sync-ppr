"use client";
import { useState } from "react";

export default function CookieChanger() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/set-cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user }),
      });
      if (!res.ok) throw new Error("Błąd API: " + res.status);
      window.location.reload();
    } catch (err: any) {
      setError(err.message || "Błąd zapisu cookie");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
      <label>Ustaw cookie "user": </label>
      <input
        name="user"
        placeholder="np. Janek"
        value={user}
        onChange={e => setUser(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>
        {loading ? "Ustawianie..." : "Zmień cookie"}
      </button>
      {error && <span style={{ color: "red", marginLeft: 12 }}>{error}</span>}
    </form>
  );
}

