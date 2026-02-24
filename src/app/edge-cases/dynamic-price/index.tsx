import { ProductBad, setPrice as setBadPrice } from "./bad";
import { ProductGood, setPrice as setGoodPrice } from "./good";
import fs from "fs";
import path from "path";

export default async function DynamicPriceEdgeCasePage() {
  const explanation = fs.readFileSync(path.join(process.cwd(), "src/app/edge-cases/dynamic-price/explanation.md"), "utf8");

  return (
    <div style={{ padding: 24 }}>
      <h2>Edge-case 2: Cache + dynamiczne ceny</h2>
      <div dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, "<br>") }} />
      <hr />
      <h3>Błędny przykład (cache bez revalidate):</h3>
      <ProductBad />
      <hr />
      <h3>Poprawny przykład (cache z revalidateTag):</h3>
      <ProductGood />
      <hr />
      <PriceChanger />
    </div>
  );
}

function PriceChanger() {
  // UI do zmiany ceny produktu (client component)
  return (
    <form action="/api/set-price" method="POST" style={{ marginTop: 24 }}>
      <label>Ustaw cenę produktu: </label>
      <input name="price" type="number" min="1" />
      <button type="submit">Zmień cenę</button>
    </form>
  );
}

