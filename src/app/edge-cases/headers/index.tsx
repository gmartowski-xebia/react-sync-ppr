import CountryPanelBad from "./bad";
import CountryPanelGood from "./good";
import fs from "fs";
import path from "path";

export default async function HeadersEdgeCasePage() {
  const explanation = fs.readFileSync(path.join(process.cwd(), "src/app/edge-cases/headers/explanation.md"), "utf8");

  return (
    <div style={{ padding: 24 }}>
      <h2>Edge-case 3: Cache + headers</h2>
      <div dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, "<br>") }} />
      <hr />
      <h3>Błędny przykład (cache globalny):</h3>
      <CountryPanelBad />
      <hr />
      <h3>Poprawny przykład (dynamiczne headers):</h3>
      <CountryPanelGood />
      <hr />
      <HeaderChanger />
    </div>
  );
}

function HeaderChanger() {
  // UI do ustawiania nagłówka x-country (client component)
  return (
    <form action="/api/set-header" method="POST" style={{ marginTop: 24 }}>
      <label>Ustaw nagłówek x-country: </label>
      <input name="country" placeholder="np. PL" />
      <button type="submit">Ustaw nagłówek</button>
    </form>
  );
}

