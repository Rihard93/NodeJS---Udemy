const path = require('path'); //Libreria para poder obtener la ruta absoluta del proyecto

const express = require('express'); //Libreria para poder hacer uso del framework express.js

const router = express.Router() //Función que permite exportar las rutas hacia otro archivo

const rootDir = require('../util/path'); //Se almacena la ruta absulta del proyecto

//Metodo que se ejecutará para cada request que se haga al sitio web.
router.get('/',(req, res, next) =>{    

    //Se envia la vista html de la pagina al usuario.
    res.sendFile(path.join(rootDir,'views', 'shop.html'));
});

module.exports = router;