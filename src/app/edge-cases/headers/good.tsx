// ...poprawny przykład: dynamiczne headers...
import { cookies } from "next/headers";

export default async function CountryPanelGood() {
  // bez "use cache"
  // Zamiast headers, pobieramy symulowany nagłówek z cookies
  const country = cookies().get("x-country")?.value || "Nieznany";
  return <div>Kraj (dynamiczny): {country}</div>;
}
