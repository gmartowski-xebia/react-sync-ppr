import UserPanelBad from "./bad";
import UserPanelGood from "./good";
import fs from "fs";
import path from "path";
import { cookies } from "next/headers";

export default async function CookieEdgeCasePage() {
  // Wyjaśnienie
  const explanation = fs.readFileSync(path.join(process.cwd(), "src/app/edge-cases/cookie/explanation.md"), "utf8");

  // Interaktywność: zmiana cookie przez UI
  // (w Next.js 16 można użyć API route do ustawiania cookies)

  return (
    <div style={{ padding: 24 }}>
      <h2>Edge-case 1: Cache + cookies</h2>
      <div dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, "<br>") }} />
      <hr />
      <h3>Błędny przykład (globalny cache):</h3>
      <UserPanelBad />
      <hr />
      <h3>Poprawny przykład (dynamiczne cookies):</h3>
      <UserPanelGood />
      <hr />
      <CookieChanger />
    </div>
  );
}

function CookieChanger() {
  // UI do zmiany cookie (client component)
  return (
    <form action="/api/set-cookie" method="POST" style={{ marginTop: 24 }}>
      <label>Ustaw cookie "user": </label>
      <input name="user" placeholder="np. Janek" />
      <button type="submit">Zmień cookie</button>
    </form>
  );
}

