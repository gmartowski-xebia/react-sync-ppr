import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let user = "Anonim";
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const body = await req.json();
    user = body.user || "Anonim";
  } else if (contentType.includes("form")) {
    const formData = await req.formData();
    const val = formData.get("user");
    user = typeof val === "string" ? val : "Anonim";
  }
  const res = NextResponse.redirect("/edge-cases/cookie");
  res.cookies.set("user", String(user));
  return res;
}
