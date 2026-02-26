"use cache";
import { cacheTag } from "next/cache";
import { getPrice } from "./priceStore";

export async function ProductGood() {
  cacheTag("product-1");
  return <div>Cena produktu (z revalidate): {getPrice()} zł</div>;
}
