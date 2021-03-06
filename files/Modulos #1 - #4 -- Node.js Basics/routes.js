//CONTIENE LOS REDIRECCIONMAIENTOS DE LA PAGINA WEB

const fs = require('fs'); //Libreria para trabajar con el FileSystem

const requestHandler = (req,res) =>{

    //Obtenemos la direccion URL y el metodo
    const url = req.url;
    const method = req.method;

    //Condicion para validar que la URL venga solo con el hostname
    if(url === '/'){        
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); //Se finaliza la ejecucion del servidor
    }
    //Si la pagina es redirigida a Message y es un metodo POST request
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk); //Se ingresa en el arreglo el chunk de datos
        });
        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString(); //Se convierte el chunk de datos a string
            const message = parsedBody.split('=') [1];  //Se separa la informacion y se obtiene el mensaje ingresado
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302; // El codigo 302 hace equivalencia a un redirecting en la pagina
                res.setHeader('Location', '/');
                return res.end(); //Se finaliza la ejecucion del servidor
            }); //Se guarda el mensaje en un archivo de texto
        });
    }
    //Si alguna de las condiciones no se cumplen se muestra un mensaje por defecto
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

//Formato para exportar metodos hacia el servidor de la pagina web.
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};