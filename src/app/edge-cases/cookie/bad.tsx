// ...błędny przykład: cache + cookies...
import { cookies } from "next/headers";

export default async function UserPanelBad() {
  "use cache";
  const session = await getSessionFromCookies();
  return <div>Witaj {session.user.name} (cache: globalny)</div>;
}

async function getSessionFromCookies() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("user")?.value || "Anonim";
  return { user: { name: cookie } };
}
