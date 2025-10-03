//Importo dati schede
const schede = require("../data/schedaData");

//Index
const index = (req, res) => {
  res.json(schede);
};

//Show
const show = (req, res) => {};

//Delete
const destroy = (req, res) => {};

module.exports = { index, show, destroy };
