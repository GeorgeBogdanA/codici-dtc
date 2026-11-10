// FILE DI ESEMPIO: dati inventati, solo per mostrare il formato.
// Per usarlo al posto dei dati reali, rinominalo in databaseCSV.js.
//
// Formato: macchina;stato;codice DTC;ECU;messaggio breve;traduzione italiana (facoltativa)
// - stato: avviso (⚠️) oppure errore (⛔)
// - i messaggi che contengono ; o " vanno tra virgolette (le " interne si scrivono "")
// - non usare il carattere ` (backtick) nei messaggi
const databaseCSV = `12-02;avviso;0-100-01;ECU1;Supply voltage above the allowed range;Tensione di alimentazione sopra il valore consentito
12-02;errore;1-200-02;ECU2;Sensore di esempio: segnale fuori gamma
12-04;avviso;0-100-01;ECU1;Supply voltage above the allowed range;Tensione di alimentazione sopra il valore consentito
12-04;errore;5-300-13;ECU3;"Comunicazione di esempio; timeout messaggio"
388;avviso;101;LIFT;Joystick di esempio non in posizione neutra
388;errore;T 201;TRAZIONE;Beispielsensor Signal ungültig;Segnale del sensore di esempio non valido`;
