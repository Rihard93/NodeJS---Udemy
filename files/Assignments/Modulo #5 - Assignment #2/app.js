//Librerias
const path = require("path"); //Libreria para poder obtener la ruta absoluta del proyecto
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const app = express(); // Aplicacion de express.js

//Middleware estatico que se encarga de permitir el accesso a la carpeta public desde el sitio web
app.use(express.static(__dirname));

// root page
app.get("/", (req, res, next) => {
  //Se envia la vista html de la pagina al usuario.
  res.sendFile(path.join(__dirname, "root.html"));
});

// users page
app.get("/users", (req, res, next) => {
    //Se envia la vista html de la pagina al usuario.
    res.sendFile(path.join(__dirname, "users.html"));
  });

//Se establece el puerto en donde se iniciara el sitio web.
app.listen(3000);
