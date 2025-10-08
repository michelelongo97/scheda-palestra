const express = require("express");
const router = express.Router();
const schedaController = require("../controllers/schedaController");

//Lista rotte con funzione corrispondente del controller

//Index
router.get("/", schedaController.index);

//Show
router.get("/:id", schedaController.show);

//Create
router.post("/", schedaController.create);

//Update
router.put("/:id", schedaController.update);

//Modify
router.patch("/:id", schedaController.modify);

//Delete
router.delete("/:id", schedaController.destroy);

module.exports = router;
