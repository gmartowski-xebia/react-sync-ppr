// ...błędny przykład: cache + dynamiczne ceny...
let price = 100;

export async function ProductBad() {
  // "use cache";
  return <div>Cena produktu (cache): {price} zł</div>;
}

export function setPrice(newPrice: number) {
  price = newPrice;
}

