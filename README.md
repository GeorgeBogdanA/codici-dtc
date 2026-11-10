# Ricerca codici DTC

Pagina web per cercare i codici di errore (DTC) per macchina: 12-02, 12-04 e 388 (LIFT / TRAZIONE).
Funziona anche offline e si può aggiungere alla schermata Home del telefono.

## File

| File | Contenuto |
|---|---|
| `index.html` | La pagina: ricerca, suggerimenti, risultati |
| `databaseCSV.esempio.js` | Dati **di esempio inventati** (6 righe) per mostrare il formato |
| `manifest.json`, `sw.js` | Installazione sulla Home e uso offline |
| `icona.svg`, `icona-*.png`, `apple-touch-icon.png` | Icona del muletto |

## Dati

I dati reali **non sono nella repo** (`databaseCSV.js` è escluso nel `.gitignore`).
La pagina carica `databaseCSV.js`: per provarla con i dati di esempio copia
`databaseCSV.esempio.js` in `databaseCSV.js`.

## Formato dei dati (`databaseCSV.js`)

```
macchina;stato;codice DTC;ECU;messaggio breve;traduzione italiana (facoltativa)
12-02;avviso;0-302-73;KSC;Power Supply (exceeds Max specified level);Alimentazione elettrica (supera il livello massimo specificato)
388;errore;T 201;TRAZIONE;"Messaggio con ; all'interno va tra virgolette"
```

- `stato`: `avviso` (⚠️) oppure `errore` (⛔)
- I messaggi che contengono `;` o `"` vanno tra virgolette (`"` interne scritte come `""`).
- Non usare il carattere `` ` `` (backtick) nei messaggi.

## Aggiornare il sito

Dopo aver modificato i dati, caricare sul sito `databaseCSV.js` (e `index.html` se modificato).
