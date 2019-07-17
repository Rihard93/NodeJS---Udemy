const requestHandler = (req, res) =>{

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Welcome</title><head>');
        res.write('<body><h1>Welcome to my first Node.js site!</h1></body>');
        res.write('<br>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create user</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            //console.log(chunk);
            body.push(chunk); //Se ingresa en el arreglo el chunk de datos
        });
        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString(); //Se convierte el chunk de datos a string
            const message = parsedBody.split('=') [1];  //Se separa la informacion y se obtiene el mensaje ingresado
            console.log('Username ' + message + ' has been created!' );
            res.statusCode = 302; // El codigo 302 hace equivalencia a un redirecting en la pagina
            res.setHeader('Location', '/');
            return res.end(); //Se finaliza la ejecucion del servidor
        });
    }    
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>User List</title><head>');
        res.write('<body><h1>Please look at these usernames!</h1></body>');
        res.write('<body><ul><li>Rihard93</li><li>MRihard93</li><li>BlackDragon</li></ul></body>');
        res.write('</html>');
        return res.end();  
    }
}

exports.handler = requestHandler;