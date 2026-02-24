// ...poprawny przykład: revalidateTag...
let price = 100;

export async function ProductGood() {
  "use cache";
  cacheTag(`product-price`);
  return <div>Cena produktu (z revalidate): {price} zł</div>;
}

export function setPrice(newPrice: number) {
  price = newPrice;
}

