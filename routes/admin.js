const path = require("path"); //Libreria para poder obtener la ruta absoluta del proyecto
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const router = express.Router(); //Función que permite exportar las rutas hacia otro archivo
const prodcutsController = require('../controllers/products'); //Se manda a llamar al controlador de products.js


//Metodos que se ejecutarán para cada request que se haga a add-product
router.get("/add-product", prodcutsController.getAddProduct);

router.post("/add-product",prodcutsController.postAddProduct);

module.exports = router; //Se exportan las rutas bajo el metodo routes