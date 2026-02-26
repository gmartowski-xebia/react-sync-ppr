"use client";
import { useState } from "react";

export default function PriceChangerBad() {
  const [val, setVal] = useState("");
  return (
    <form action="/api/set-price" method="POST" style={{marginTop: 16}}>
      <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Nowa cena" name="price" />
      <button type="submit">Zmień cenę</button>
    </form>
  );
}

