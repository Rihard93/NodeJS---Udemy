//Librerias
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const bodyParser = require("body-parser"); //Libreria para poder hacer un parse de la informacion ingresada en los formularios
const app = express(); // Aplicacion de express.js

app.set("view engine", "ejs"); //Se habilita el view engine deseado.
app.set("views", "views"); //Se indica en que carpeta se encuentran las vistas de la pagina web.

const users = []; //Arreglo en donde se almacenaran todos los usuarios ingresados

//Middleware que se encargara de almancenar toda la informacion que se ingrese al sitio.
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("add-user", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "User",
    users: users
  });
});

app.post("/add-user", (req, res, next) => {
  users.push({ username: req.body.username });
  res.redirect("/users");
});

//Se establece el puerto en donde se iniciara el sitio web.
app.listen(3000);