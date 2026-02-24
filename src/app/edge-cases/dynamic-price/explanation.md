### Edge-case 2: Cache + dynamiczne ceny

**Błędny przykład:** Komponent z "use cache" bez revalidateTag/cacheLife – cena produktu nie odświeża się po zmianie.

**Poprawny przykład:** Komponent z cacheTag i revalidateTag – cena odświeża się po zmianie.

**Interaktywność:** Możesz zmienić cenę produktu przez UI i zobaczyć, czy komponent reaguje (bad: nie, good: tak).

