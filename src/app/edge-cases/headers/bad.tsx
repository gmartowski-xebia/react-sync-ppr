// ...błędny przykład: cache + headers...
import { cookies } from "next/headers";

export default async function CountryPanelBad() {
  // "use cache";
  // Nie można użyć cookies() w cache scope – Next.js 16 wywoła błąd builda
  // Tu tylko statyczny tekst, wyjaśnienie w explanation.md
  return <div style={{color:'red'}}>BŁĘDNY PRZYKŁAD: cookies()/headers() w cache scope powoduje błąd builda w Next.js 16</div>;
}
