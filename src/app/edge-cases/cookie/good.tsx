// ...poprawny przykład: dynamiczne cookies...
import { cookies } from "next/headers";

export default async function UserPanelGood() {
  // bez "use cache"
  const session = await getSessionFromCookies();
  return <div>Witaj {session.user.name} (cache: per user)</div>;
}

async function getSessionFromCookies() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("user")?.value || "Anonim";
  return { user: { name: cookie } };
}
