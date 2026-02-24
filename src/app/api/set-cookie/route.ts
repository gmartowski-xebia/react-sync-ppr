import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const user = formData.get("user") || "Anonim";
  const res = NextResponse.redirect("/edge-cases/cookie");
  res.cookies.set("user", String(user));
  return res;
}

