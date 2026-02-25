import UserPanelBad from "./bad";
import UserPanelGood from "./good";
import fs from "fs";
import path from "path";
import { Suspense } from "react";

export default async function CookieEdgeCasePage() {
  // Wyjaśnienie
  const explanation = fs.readFileSync(path.join(process.cwd(), "src/app/edge-cases/cookie/explanation.md"), "utf8");

  return (
    <div style={{ padding: 24 }}>
      <h2>Edge-case 1: Cache + cookies</h2>
      <div dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, "<br>") }} />
      <hr />
      <h3>Błędny przykład (globalny cache):</h3>
      <Suspense fallback={<div>Ładowanie...</div>}>
        <UserPanelBad />
      </Suspense>
      <hr />
      <h3>Poprawny przykład (dynamiczne cookies):</h3>
      <Suspense fallback={<div>Ładowanie...</div>}>
        <UserPanelGood />
      </Suspense>
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
