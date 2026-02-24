import { FaCookieBite, FaMoneyBillWave, FaGlobeEurope, FaTag, FaSyncAlt, FaUserSecret, FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import { Suspense } from "react";
import CopyrightYear from "./CopyrightYear";

const edgeCases = [
	{
		href: "/edge-cases/cookie",
		icon: <FaCookieBite className="text-orange-500" />,
		title: "Cache + cookies",
		desc: "Przypadkowe cache’owanie użytkownika (wyciek danych)",
		color: "bg-orange-100 border-orange-400",
	},
	{
		href: "/edge-cases/dynamic-price",
		icon: <FaMoneyBillWave className="text-green-500" />,
		title: "Cache + dynamiczne ceny",
		desc: "Nieaktualne ceny przez brak revalidate",
		color: "bg-green-100 border-green-400",
	},
	{
		href: "/edge-cases/headers",
		icon: <FaGlobeEurope className="text-blue-500" />,
		title: "Cache + headers",
		desc: "Globalny cache dla nagłówków (np. kraj)",
		color: "bg-blue-100 border-blue-400",
	},
];

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
							className={`border rounded-xl p-6 flex items-center gap-4 shadow-sm transition hover:scale-105 hover:bg-white dark:hover:bg-zinc-800 ${ec.color}`}
						>
							<span className="text-3xl mr-2">{ec.icon}</span>
							<div className="flex flex-col">
								<Link
									href={ec.href}
									className="text-lg font-semibold text-black dark:text-zinc-50 hover:underline"
								>
									{ec.title}
								</Link>
								<span className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
									{ec.desc}
								</span>
							</div>
						</li>
					))}
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
