// Service worker: permette di usare la pagina anche senza connessione.
// Strategia "prima la rete": se c'è connessione prende sempre i file aggiornati
// (es. un nuovo databaseCSV.js), altrimenti usa l'ultima copia salvata.
const CACHE = "codici-dtc-v1";
const FILES = [
  "./",
  "./index.html",
  "./databaseCSV.js",
  "./manifest.json",
  "./icona.svg",
  "./icona-192.png",
  "./icona-512.png",
  "./apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((nomi) => Promise.all(nomi.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((risposta) => {
        const copia = risposta.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copia));
        return risposta;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
