// ...błędny przykład: cache + cookies...
import { cookies } from "next/headers";

export default async function UserPanelBad() {
  // "use cache";
  // Nie można użyć cookies() w cache scope – Next.js 16 wywoła błąd builda
  // Tu tylko statyczny tekst, wyjaśnienie w explanation.md
  return <div style={{color:'red'}}>BŁĘDNY PRZYKŁAD: cookies() w cache scope powoduje błąd builda w Next.js 16</div>;
}

async function getSessionFromCookies() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("user")?.value || "Anonim";
  return { user: { name: cookie } };
}
