### Edge-case 1: Cache + cookies

**Błędny przykład:** Komponent z "use cache" i cookies powoduje wyciek danych – pierwszy user trafia do cache, kolejni dostają ten sam HTML.

**Poprawny przykład:** Komponent bez "use cache" lub z cache tagowanym per user. Cookies i auth powinny być dynamiczne.

**Interaktywność:** Możesz zmienić cookie i zobaczyć, czy komponent reaguje (bad: nie, good: tak).

