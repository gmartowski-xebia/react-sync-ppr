import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-zinc-50">
          Porównanie sposobów renderowania w Next.js
        </h1>
        <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300 text-center max-w-xl">
          Poniżej znajdziesz przykłady działania różnych metod renderowania stron w
          Next.js:
        </p>
        <ul className="flex flex-col gap-4 w-full max-w-md">
          <li>
            <Link
              href="/ssg"
              className="block w-full rounded bg-blue-500 text-white px-4 py-2 text-center hover:bg-blue-600 transition"
            >
              SSG (Static Site Generation)
            </Link>
          </li>
          <li>
            <Link
              href="/ssr"
              className="block w-full rounded bg-green-500 text-white px-4 py-2 text-center hover:bg-green-600 transition"
            >
              SSR (Server Side Rendering)
            </Link>
          </li>
          <li>
            <Link
              href="/csr"
              className="block w-full rounded bg-yellow-500 text-black px-4 py-2 text-center hover:bg-yellow-400 transition"
            >
              CSR (Client Side Rendering)
            </Link>
          </li>
          <li>
            <Link
              href="/isr"
              className="block w-full rounded bg-purple-500 text-white px-4 py-2 text-center hover:bg-purple-600 transition"
            >
              ISR (Incremental Static Regeneration)
            </Link>
          </li>
          <li>
            <Link
              href="/ppr"
              className="block w-full rounded bg-pink-500 text-white px-4 py-2 text-center hover:bg-pink-600 transition"
            >
              PPR (Partial Prerendering)
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
