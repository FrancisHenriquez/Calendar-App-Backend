
const express = require('express');
const { dbConnection } = require('./database/config')
require('dotenv').config();
const cors = require('cors');l

console.log(process.env)

//* Server creation
const app = express();

//* Data base
dbConnection();

//*CORS
app.use(cors())


//* Public directory
app.use(express.static('public'));

//* lecture and body parse 
app.use( express.json() );

//*Routes
app.use('/api/auth', require('./routes/auth'));

//Todo: CRUD: Events

//* Petition listening 
app.listen( process.env.PORT, () => {
    console.log(`Server runing at  ${ process.env.PORT }`)
})



