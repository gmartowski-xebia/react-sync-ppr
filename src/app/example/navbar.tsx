"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [forks, setForks] = useState<number | null>(null);
  const [watchers, setWatchers] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/gmartowski-xebia/react-sync-ppr", {next: {revalidate: 86400}})
      .then((res) => res.json())
      .then((data) => {
        setForks(data.forks);
        setWatchers(data.watchers);
        console.log(data)
      });
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-zinc-800/80 shadow-sm sticky top-0 z-50">
      <div className="font-bold text-lg text-zinc-800 dark:text-zinc-100">Example App</div>
      <div className="flex items-center gap-6 text-zinc-700 dark:text-zinc-200">
        <span>Forks: {forks !== null ? forks : "..."}</span>
        <span>Watchers: {watchers !== null ? watchers : "..."}</span>
      </div>
    </nav>
  );
}

