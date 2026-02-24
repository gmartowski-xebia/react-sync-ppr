import Navbar from "@/app/example/navbar";
import RickAndMortyGallery from "@/app/example/rickandmorty-gallery";
import RickAndMortyGallerySkeleton from "@/app/example/rickandmorty-gallery-skeleton";
import {Suspense} from "react";

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-zinc-800 dark:text-zinc-100">Galeria Rick & Morty</h1>
        <Suspense fallback={<RickAndMortyGallerySkeleton />}>
          <RickAndMortyGallery />
        </Suspense>
      </main>
    </div>
  );
}
