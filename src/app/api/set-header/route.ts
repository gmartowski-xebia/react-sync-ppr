import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const country = formData.get("country") || "Nieznany";
  // Symulacja: ustawiamy cookie zamiast nagłówka, bo nagłówki nie są dostępne po stronie klienta
  const res = NextResponse.redirect("/edge-cases/headers");
  res.cookies.set("x-country", String(country));
  return res;
}

