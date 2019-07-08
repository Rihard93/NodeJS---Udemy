const express = require('express'); //Libreria para poder hacer uso del framework express.js

const app = express(); // Aplicacion de express.js

//Metodo que se ejecutará para cada request que se haga al sitio web.
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

//Metodo que se ejecutará para cada request que se haga a add-product
app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

//Metodo que se ejecutará para cada request que se haga al sitio web.
app.use('/',(req, res, next) =>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

//Se establece el puerto en donde se iniciara el sitio web.
app.listen(3000);