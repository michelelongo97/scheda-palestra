const express = require("express");
const router = express.Router();
const schedaController = require("../controllers/schedaController");

//Lista rotte con funzione corrispondente del controller

//Index
router.get("/", schedaController.index);

//Show
router.get("/:id", schedaController.show);

//Delete
router.get("/:id", schedaController.destroy);

module.exports = router;
