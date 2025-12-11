## Funzionalità principali

- Homepage con jumbotron
- Visualizzazione delle schede di allenamento standard
- Dati gestiti in un file JS locale (`schedaData.js`)
- Header con menu "hamburger" per mobile
- Footer con collegamenti ai social e agli sponsor
- Pagina “Chi siamo”
- Link prenotazione esterna
- Interfaccia responsive e moderna

Attualmente non prevista:

- Accesso utente
- Dashboard
- Creazione schede da parte degli utenti

---

## Setup e installazione

### Clona il repository

```bash
git clone https://github.com/michelelongo97/scheda-palestra.git
cd scheda-palestra
Backend – Installazione e avvio
cd scheda-palestra-be
npm install
npm run watch
Crea un file .env con:
PORT=3000
Il server sarà disponibile su:
-> http://localhost:3000

Frontend – Installazione e avvio
cd scheda-palestra-fe
npm install
npm run dev
Crea un file .env con:
VITE_BE_URL=http://localhost:3000
Apri l’app su:
-> http://localhost:5173

Endpoint API principali

Metodo	Endpoint	Descrizione
GET	/schede	Restituisce tutte le schede
GET	/schede/:id	Restituisce una scheda singola
POST	/schede	Crea una nuova scheda
PUT	/schede/:id	Modifica una scheda
PATCH	/schede/:id	Aggiorna parzialmente una scheda
DELETE	/schede/:id	Elimina una scheda

Immagini
Le immagini sono servite come file statici dal backend (/public).

Stile e Responsività
Stile realizzato con CSS puro
Layout responsive tramite media query
Palette: verde acqua e toni neutri
Effetti hover e transizioni morbide

Tecnologie utilizzate
Frontend
- React 18
- React Router
- Axios
- Vite
Backend
- Node.js
- Express.js
- dotenv
- CORS

## Sviluppi futuri
- Persistenza dati su database (MySQL)
- Autenticazione utente
- Caricamento immagini locali
- Creazione, modifica, eliminazione schede

## Autore: Michele Longo
- Anno 2025
- Boolean classe #138

```
