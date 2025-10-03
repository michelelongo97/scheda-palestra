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

module.exports = { index, show, destroy };
