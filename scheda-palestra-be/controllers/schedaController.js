//Importo dati schede
const schede = require("../data/schedaData");

//Index
const index = (req, res) => {
  res.json(schede);
};

//Show
const show = (req, res) => {
  const scheda = schede.find((s) => s.id == req.params.id);
  if (!scheda) {
    return res.status(404).json({
      error: "Scheda non trovata",
    });
  }
  res.json(scheda);
};

//Create
const create = (req, res) => {
  const { nome, image, durata, livello, esercizi } = req.body;

  // Validazione base
  if (!nome) {
    return res.status(400).json({ error: "Il campo 'nome' è obbligatorio" });
  }

  // Calcolo ID che gestisce anche il caso di array vuoto
  const newId = schede.length ? schede[schede.length - 1].id + 1 : 1;

  // Creazione oggetto scheda
  const newScheda = {
    id: newId,
    nome,
    durata,
    livello,
    image: image || "/images/default.jpg", // puoi mettere un'immagine di default
    esercizi: esercizi || [],
  };

  // Inserimento in array
  schede.push(newScheda);

  // Risposta
  res.status(201).json(newScheda);
};

//Update
const update = (req, res) => {
  const index = schede.findIndex((s) => s.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      error: "Scheda non trovata",
    });
  }

  // Verifica che tutti i campi obbligatori siano presenti
  const { nome, esercizi, image, durata, livello } = req.body;
  if (!nome || !esercizi || !image || !durata || !livello) {
    return res.status(400).json({
      error: "Tutti i campi sono obbligatori per il metodo PUT",
    });
  }

  // Sostituisce completamente la scheda
  const updatedScheda = {
    id: schede[index].id, // mantengo l'id invariato
    nome,
    durata,
    livello,
    esercizi,
    image,
  };

  schede[index] = updatedScheda;

  res.json(updatedScheda);
};

//Modify
const modify = (req, res) => {
  const scheda = schede.find((s) => s.id == req.params.id);
  if (!scheda) {
    return res.status(404).json({
      error: "Scheda non trovata",
    });
  }

  const updatedScheda = {
    ...scheda,
    ...req.body,
  };

  const index = schede.findIndex((s) => s.id == req.params.id);
  schede[index] = updatedScheda;

  res.json(updatedScheda);
};

//Delete
const destroy = (req, res) => {
  const scheda = schede.find((s) => s.id == req.params.id);

  if (!scheda) {
    return res.status(404).json({
      error: "Scheda non trovata",
    });
  }
  schede.splice(schede.indexOf(scheda), 1);

  res.sendStatus(204);
};

module.exports = { index, show, create, update, modify, destroy };
