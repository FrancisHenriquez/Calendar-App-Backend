
const express = require('express');
require('dotenv').config();

console.log(process.env)

// Server creation
const app = express();

//* Public directory
app.use(express.static('public'));

//* lecture and body parse 
app.use( express.json() );

//Routes
app.use('/api/auth', require('./routes/auth'));

//Todo: CRUD: Events

//* Petition listening 
app.listen( process.env.PORT, () => {
    console.log(`Server runing at  ${ process.env.PORT }`)
})



