const path = require("path"); //Libreria para poder obtener la ruta absoluta del proyecto
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const router = express.Router(); //Función que permite exportar las rutas hacia otro archivo
const shopController = require('../controllers/shop'); //Se manda a llamar al controlador de products.js

//Rutas de la pagina web.
router.get("/",shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
