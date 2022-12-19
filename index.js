
const express = require('express');
require('dotenv').config();

console.log(process.env)

// Server creation
const app = express();

//* Public directory
app.use(express.static('public'));

//Routes
app.use('/api/auth', require('./routes/auth'));

//TODO: CRUD: Events

// Petition listening 
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
})



