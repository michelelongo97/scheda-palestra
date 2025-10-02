const express = require("express");
const cors = require("cors");
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");
const schedeRouter = require("./routers/schedeRouter");

const app = express();
const { PORT, FE_URL } = process.env;

//Cors per comunicare con FE
app.use(
  cors({
    origin: FE_URL,
  })
);
//Middlewares per i file statici
app.use(express.static("public"));
//Middlewares per il parsing del req.body
app.use(express.json());

//Routes
app.use("/schede", schedeRouter);

// - Per gestione errori
app.use(notFound);
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
