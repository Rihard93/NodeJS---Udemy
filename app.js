//Librerias
const path = require("path"); //Libreria para poder obtener la ruta absoluta del proyecto
const express = require("express"); //Libreria para poder hacer uso del framework express.js
const bodyParser = require("body-parser"); //Libreria para poder hacer un parse de la informacion ingresada en los formularios
const app = express(); // Aplicacion de express.js

app.set('view engine', 'ejs'); //Se habilita el view engine deseado.
app.set('views', 'views'); //Se indica en que carpeta se encuentran las vistas de la pagina web.

//Rutas
const adminData = require("./routes/admin"); //Ubicacion en donde se encuentran las rutas y la logica para la seccion de administrador
const shopRoutes = require("./routes/shop"); //Ubicacion en donde se encuentran las rutas y la logica para la seccion de ventas

//Middleware que se encargara de almancenar toda la informacion que se ingrese al sitio.
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware estatico que se encarga de permitir el accesso a la carpeta public desde el sitio web
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes); //Se hace uso de las rutas almacenadas en el archivo admin.js
app.use(shopRoutes); //Se hace uso de las rutas almacenadas en el archivo shop.js

//404 error page
app.use((req, res, next) => {
  //Se envia la vista html (.ejs) de la pagina al usuario.
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

//Se establece el puerto en donde se iniciara el sitio web.
app.listen(3000);
