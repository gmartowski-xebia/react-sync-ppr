import { ProductBad } from "./bad";
import { ProductGood } from "./good";
import PriceChangerBad from "./PriceChangerBad";
import PriceChangerGood from "./PriceChangerGood";
import fs from "fs";
import path from "path";
import { Suspense } from "react";

export default async function DynamicPriceEdgeCasePage() {
  const explanation = fs.readFileSync(path.join(process.cwd(), "src/app/edge-cases/dynamic-price/explanation.md"), "utf8");

  return (
    <div style={{ padding: 24 }}>
      <h2>Edge-case 2: Cache + dynamiczne ceny</h2>
      <div dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, "<br>") }} />
      <hr />
      <h3>Błędny przykład (cache bez revalidate):</h3>
      <ProductBad />
      <Suspense fallback={<div>Ładowanie formularza...</div>}>
        <PriceChangerBad />
      </Suspense>
      <hr />
      <h3>Poprawny przykład (cache z revalidateTag):</h3>
      <ProductGood />
      <Suspense fallback={<div>Ładowanie formularza...</div>}>
        <PriceChangerGood />
      </Suspense>
    </div>
  );
}
