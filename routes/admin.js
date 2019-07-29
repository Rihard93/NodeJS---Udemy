const path = require("path"); //Libreria para poder obtener la ruta absoluta del proyecto
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const router = express.Router(); //Función que permite exportar las rutas hacia otro archivo
const rootDir = require("../util/path"); //Se almacena la ruta absulta del proyecto
const products = []; //Arreglo en donde se almancenaran todos los productos ingresados

//Metodo que se ejecutará para cada request que se haga a add-product
router.get("/add-product", (req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario.
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product"
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router; //Se exportan las rutas bajo el metodo routes
exports.products = products; //Se exportan los datos bajo el metodo products
