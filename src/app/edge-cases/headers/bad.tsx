// ...błędny przykład: cache + headers...
import { cookies } from "next/headers";

export default async function CountryPanelBad() {
  "use cache";
  // Zamiast headers, pobieramy symulowany nagłówek z cookies
  const country = cookies().get("x-country")?.value || "Nieznany";
  return <div>Kraj (cache globalny): {country}</div>;
}
