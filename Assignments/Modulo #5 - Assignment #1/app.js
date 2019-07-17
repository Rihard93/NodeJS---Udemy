const express = require('express'); //Libreria para poder hacer uso del framework express.js

const app = express(); // Aplicacion de express.js

//app.use((req, res, next) =>{
//    console.log('Middleware #1!');
//    next();
//});

//app.use((req, res, next) =>{
//    console.log('Middleware #2!');
//    res.send('<h1>Part #1 done!</h1>');
//});

//Metodo que se ejecutará para cada request que se haga al sitio web.
app.use('/users',(req, res, next) =>{
    console.log('Users middleware!');
    res.send('<h1>Hello from users tab!</h1>');
});

//Metodo que se ejecutará para cada request que se haga al sitio web.
app.use('/',(req, res, next) =>{
    console.log('Default middleware!');
    res.send('<h1>This is the default tab!</h1>');
});

//Se establece el puerto en donde se iniciara el sitio web.
app.listen(3000);