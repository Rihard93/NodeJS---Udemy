const path = require("path"); //Libreria para poder obtener la ruta absoluta del proyecto
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const router = express.Router(); //Función que permite exportar las rutas hacia otro archivo
const rootDir = require("../util/path"); //Se almacena la ruta absulta del proyecto
const adminData = require("./admin"); //Se obtienen los metodos exportados de admin.js

//Metodo que se ejecutará para cada request que se haga al sitio web.
router.get("/", (req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  });
});

module.exports = router;
