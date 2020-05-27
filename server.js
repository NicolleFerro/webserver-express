const express = require('express')
const hbs = require('hbs')
require('./hbs/helpers')

//declara una variable que es producto de la funcion express, nos permite usar express como nosotros deseamos
const app = express()

//en caso la variable global no tenga valor seteara el valor de 3000
const port = process.env.PORT || 3000;

//creacion de middleware
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales');
//asigname como motor de vista el hbs
app.set('view engine', 'hbs');



//estamos configurado una solicitud get cuando el path sea un /. Es decir que todas las peticiones que cuenten con / pasaran por el callback indicado abajo
//se puede cambiar para que sea una funcion asincrona y trabajar con el await
app.get('/', (req, res) => {
    //res.send('Hola mundo')

    // let salida = {
    //     nombre: 'nicolle',
    //     edad: 25,
    //     url: req.url
    // };

    // res.send(salida);

    //renderiza a home
    res.render('home', {
        nombre: 'Nicolle',
        anio: new Date().getFullYear()
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    })
})


//puerto 3000
//se reemplazara por la constante port
app.listen(port, () => {
    console.log(`Escuchando pisiciones en el puerto ${port}`);
});