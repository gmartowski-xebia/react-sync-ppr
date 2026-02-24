"use client";

export default function RickAndMortyGallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="bg-white dark:bg-zinc-800 rounded-xl shadow p-4 flex flex-col items-center animate-pulse">
          <div className="w-[180px] h-[180px] rounded-full bg-zinc-200 dark:bg-zinc-700 mb-4" />
          <div className="w-32 h-5 bg-zinc-200 dark:bg-zinc-700 rounded mb-2" />
          <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-700 rounded mb-1" />
          <div className="w-20 h-3 bg-zinc-200 dark:bg-zinc-700 rounded" />
        </div>
      ))}
    </div>
  );
}

