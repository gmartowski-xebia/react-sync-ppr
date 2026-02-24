import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { setPrice as setBadPrice } from "../../edge-cases/dynamic-price/bad";
import { setPrice as setGoodPrice } from "../../edge-cases/dynamic-price/good";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const price = Number(formData.get("price")) || 100;
  setBadPrice(price);
  setGoodPrice(price);
  revalidateTag("product-price", {}); // poprawne wywołanie
  // Tu można wywołać revalidateTag("product-price") dla good.tsx
  return NextResponse.redirect("/edge-cases/dynamic-price");
}
