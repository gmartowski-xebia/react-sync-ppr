import Image from "next/image";

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.results.slice(0, 6);
}

export default async function RickAndMortyGallery() {
  const characters = await getCharacters();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {characters.map((char: any) => (
        <div key={char.id} className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 flex flex-col items-center">
          <Image
            src={char.image}
            alt={char.name}
            width={180}
            height={180}
            className="rounded-full border mb-4"
            priority
          />
          <div className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-1">{char.name}</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-300 mb-1">{char.species} ({char.status})</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">{char.gender} | {char.origin.name}</div>
        </div>
      ))}
    </div>
  );
}

