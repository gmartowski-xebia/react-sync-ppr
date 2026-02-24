// ...poprawny przykład: dynamiczne headers...
import { cookies } from "next/headers";

export default async function CountryPanelGood() {
  // bez "use cache"
  // Zamiast headers, pobieramy symulowany nagłówek z cookies
  const cookieStore = await cookies();
  const country = cookieStore.get("x-country")?.value || "Nieznany";
  return <div>Kraj (dynamiczny): {country}</div>;
}
