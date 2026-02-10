export const revalidate = 10;

import ISRClient from "./isrClient";

// Pokazuje wyraźnie działanie revalidate: ten sam obrazek i dane przez 10 sekund, potem nowe
const NAMES = [
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Beth Smith",
  "Jerry Smith"
];

export default async function ISRPage() {
  // Losuj imię tylko raz na regenerację strony
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  let image = "";
  let author = "";
  let buildTime = new Date().toLocaleString();
  let error = false;
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`);
    const data = await res.json();
    if (data.results && data.results[0]) {
      image = data.results[0].image;
      author = data.results[0].name;
    } else {
      image = "https://placehold.co/200x200?text=Brak+obrazka";
      author = "Brak postaci";
      error = true;
    }
  } catch (e) {
    image = "https://placehold.co/200x200?text=Błąd+API";
    author = "Błąd pobierania";
    error = true;
  }
  return <ISRClient image={image} author={author} buildTime={buildTime} error={error} name={name} />;
}
