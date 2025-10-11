## 🚀 Funzionalità principali

- 📋 Visualizzazione delle schede di allenamento
- ➕ Creazione di una nuova scheda con esercizi personalizzati
- ✏️ Modifica delle schede esistenti
- ❌ Eliminazione di schede
- 🧩 Gestione esercizi (nome, descrizione, ripetizioni, serie)
- 🖼️ Immagine personalizzata o automatica (`default.jpg` se non inserita)
- 💾 Dati gestiti in un file JS locale (`schedaData.js`)
- ⚡ Interfaccia responsive e moderna

---

## ⚙️ Setup e installazione

### 1️⃣ Clona il repository
```bash
git clone https://github.com/michelelongo97/scheda-palestra.git
cd schede-allenamento
2️⃣ Backend – Installazione e avvio
cd scheda-palestra-be
npm install
npm run watch
Crea un file .env con:
PORT=3000
Il server sarà disponibile su:
👉 http://localhost:3000
3️⃣ Frontend – Installazione e avvio
cd scheda-palestra-fe
npm install
npm run dev
Crea un file .env con:
VITE_BE_URL=http://localhost:3000
Apri l’app su:
👉 http://localhost:5173
🧩 Endpoint API principali
Metodo	Endpoint	Descrizione
GET	/schede	Restituisce tutte le schede
GET	/schede/:id	Restituisce una scheda singola
POST	/schede	Crea una nuova scheda
PUT	/schede/:id	Modifica una scheda
PATCH	/schede/:id	Aggiorna parzialmente una scheda
DELETE	/schede/:id	Elimina una scheda
🖼️ Immagini
Le immagini sono servite come file statici dal backend (/public).
Se una scheda viene creata senza immagine, viene usata default.jpg automaticamente.
💅 Stile e Responsività
Stile realizzato con CSS puro
Layout responsive tramite media query
Palette: verde acqua e toni neutri
Effetti hover e transizioni morbide
📚 Tecnologie utilizzate
🖥️ Frontend
React 18
React Router
Axios
Vite
⚙️ Backend
Node.js
Express.js
dotenv
CORS

## Possibili sviluppi futuri
- Persistenza dati su database (MySQL)
- Autenticazione utente
- Caricamento immagini locali

## Autore: Michele Longo
- Anno 2025
- Boolean classe #138

