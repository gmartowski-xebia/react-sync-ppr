import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { setPrice } from "../../edge-cases/dynamic-price/priceStore";

export async function POST(req: NextRequest) {
  let price: number;
  // Obsługa zarówno JSON, jak i formData (dla BAD i GOOD)
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const body = await req.json();
    price = body.price;
  } else {
    const formData = await req.formData();
    price = Number(formData.get("price")) || 100;
  }
  setPrice(price);
  await revalidateTag("product-1", {});
  return NextResponse.json({ ok: true, price });
}
