### Edge-case 3: Cache + headers

**Błędny przykład:** Komponent z "use cache" i headers – user z PL i user z DE zobaczą ten sam wynik (globalny cache).

**Poprawny przykład:** Komponent bez "use cache" – renderowanie dynamiczne zależne od headers.

**Interaktywność:** Możesz ustawić nagłówek x-country i zobaczyć, czy komponent reaguje (bad: nie, good: tak).

