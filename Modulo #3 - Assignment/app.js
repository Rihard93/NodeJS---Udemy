const http = require('http'); //Libreria para poder levantar un servidor HTTP
const routes = require('./routes') //Se importa el archivo de routes.js

//Request que se ejecutara cada vez que se ingrese al sitio web y ejecutara el metodo exportado del archivo routes.js
const server = http.createServer(routes.handler);

//Se establece el puerto en donde se iniciara el sitio web.
server.listen(3000);