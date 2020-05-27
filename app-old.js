const http = require('http')

http.createServer((req, res) => {
        //codigo 200 significa OK, que se hace correctamente
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'nicolle',
            edad: 26,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');