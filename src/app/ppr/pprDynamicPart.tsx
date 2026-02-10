import styles from "./ppr.module.css";

export default async function PPRDynamicPart() {
  // Symulacja opóźnienia (np. fetch z API)
  await new Promise((res) => setTimeout(res, 3500)); // 3.5 sekundy
  // Losowanie postaci z Rick and Morty API
  const NAMES = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith"
  ];
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  let image = "";
  let author = "";
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
  return (
    <div className={`mt-4 p-4 rounded bg-pink-100 text-pink-800 shadow-lg ${styles.fadeIn}`}>
      <div className="mb-2 text-pink-700 text-sm">Wylosowana postać: <b>{name}</b></div>
      <img src={image} alt={author} width={200} height={200} style={{borderRadius: '1rem', margin: '0 auto'}} />
      <div className="mt-2 text-pink-800 font-semibold">{author}</div>
      {error && <div className="text-red-600 mt-2">Nie udało się pobrać danych z API lub brak postaci.</div>}
      <div className="mt-4 text-xs text-pink-500 max-w-md text-center">
        <b>Jak to działa?</b> Statyczna część strony ładuje się natychmiast, a dynamiczna (poniżej) dogrywa się z opóźnieniem i może być inna przy każdym wejściu/odświeżeniu.
      </div>
    </div>
  );
}
