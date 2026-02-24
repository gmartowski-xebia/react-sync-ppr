import {useEffect, useState} from "react";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const DetailsCount = () => {
    const [forks, setForks] = useState<number | null>(null);
    const [watchers, setWatchers] = useState<number | null>(null);

    useEffect(() => {
        async function fetchData() {
            await delay(1200); // sztuczne opóźnienie
            const res = await fetch("https://api.github.com/repos/gmartowski-xebia/react-sync-ppr", {next: {revalidate: 86400}});
            const data = await res.json();
            setForks(data.forks);
            setWatchers(data.watchers);
        }
        fetchData();
    }, []);

    return (
        <>
            <span>Forks: {forks !== null ? forks : "..."}</span>
            <span>Watchers: {watchers !== null ? watchers : "..."}</span>
        </>
    )
}

export {DetailsCount}