"use client";

import {DetailsCount} from "@/app/example/details-count";
import {Suspense} from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-zinc-800/80 shadow-sm sticky top-0 z-50">
      <div className="font-bold text-lg text-zinc-800 dark:text-zinc-100">Example App</div>
      <div className="flex items-center gap-6 text-zinc-700 dark:text-zinc-200">
          <Suspense fallback={<span>Sprawdzam ...</span>}><DetailsCount /></Suspense>
      </div>
    </nav>
  );
}

