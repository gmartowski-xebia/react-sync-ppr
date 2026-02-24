let price = 100;
export async function ProductGood() {
  // "use cache";
  return <div>Cena produktu (z revalidate): {price} zł</div>;
}
export function setPrice(newPrice: number) {
  price = newPrice;
}
