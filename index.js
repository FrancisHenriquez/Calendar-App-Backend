
const express = require('express');

// creando servidor de express
const app = express();

//Routes
app.get('/', (req, res) => {
    console.log(' se requiere /')
    res.json ({
        ok: true
    })
});


// Escuchar peticiones
app.listen( 3458, () => {
    console.log(`Servidor corriendo en el puerto ${ 3458 }`)
})



