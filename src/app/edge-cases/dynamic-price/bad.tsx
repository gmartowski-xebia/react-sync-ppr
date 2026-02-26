"use cache";
import { getPrice } from "./priceStore";

export async function ProductBad() {
  return <div>Cena produktu (cache, brak revalidate): {getPrice()} zł</div>;
}
