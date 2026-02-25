import { FaCookieBite, FaMoneyBillWave, FaUserSecret } from "react-icons/fa";
import Link from "next/link";
import { Suspense } from "react";
import CopyrightYear from "./CopyrightYear";

const edgeCases = [
	{
		href: "/edge-cases/cookie",
		icon: <FaCookieBite className="text-orange-500" />,
		title: "Cache + cookies",
		desc: "Przypadkowe cache’owanie użytkownika (wyciek danych)",
		color: "bg-white border-orange-400 dark:bg-zinc-900 dark:border-orange-500",
	},
	{
		href: "/edge-cases/dynamic-price",
		icon: <FaMoneyBillWave className="text-green-600" />,
		title: "Cache + dynamiczne ceny",
		desc: "Nieaktualne ceny przez brak revalidate",
		color: "bg-white border-green-500 dark:bg-zinc-900 dark:border-green-600",
	},
];

const examplePage = {
	href: "/example",
	icon: <FaUserSecret className="text-purple-600" />,
	title: "Example: Rick & Morty Gallery",
	desc: "Galeria bohaterów z API + licznik followersów z Githuba",
	color: "bg-white border-purple-500 dark:bg-zinc-900 dark:border-purple-600",
};

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-50 to-blue-100 dark:from-black dark:to-zinc-900 font-sans">
			<main className="flex flex-col items-center w-full max-w-4xl py-24 px-6">
				<h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-zinc-50 drop-shadow">
					Edge-case'y Cache Components w Next.js
				</h1>
				<p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300 text-center max-w-xl">
					Wybierz edge-case, aby zobaczyć interaktywny przykład i wyjaśnienie.
				</p>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
					{edgeCases.map((ec) => (
						<li
							key={ec.href}
							className={`border rounded-xl p-6 flex items-center gap-4 shadow-sm transition hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${ec.color}`}
						>
							<span className="text-3xl mr-2">{ec.icon}</span>
							<div className="flex flex-col">
								<Link
									href={ec.href}
									className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 hover:underline"
								>
									{ec.title}
								</Link>
								<span className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">
									{ec.desc}
								</span>
							</div>
						</li>
					))}
					<li
						key={examplePage.href}
						className={`border rounded-xl p-6 flex items-center gap-4 shadow-sm transition hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800 ${examplePage.color}`}
					>
						<span className="text-3xl mr-2">{examplePage.icon}</span>
						<div className="flex flex-col">
							<Link
								href={examplePage.href}
								className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 hover:underline"
							>
								{examplePage.title}
							</Link>
							<span className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">
								{examplePage.desc}
							</span>
						</div>
					</li>
				</ul>
				<div className="mt-12 text-center text-xs text-zinc-400 dark:text-zinc-500">
					<Suspense fallback={null}>
						<CopyrightYear />
					</Suspense>
				</div>
			</main>
		</div>
	);
}
