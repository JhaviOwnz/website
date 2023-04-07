const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hola, bienvenido al servidor de la aplicación.");
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
