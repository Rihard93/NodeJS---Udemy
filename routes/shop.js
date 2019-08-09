const path = require("path"); //Libreria para poder obtener la ruta absoluta del proyecto
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const router = express.Router(); //Función que permite exportar las rutas hacia otro archivo
const productsController = require('../controllers/products'); //Se manda a llamar al controlador de products.js

//Metodo que se ejecutará para cada request que se haga al sitio web.
router.get("/",productsController.getProducts);

module.exports = router;
