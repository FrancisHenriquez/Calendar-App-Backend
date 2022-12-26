const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const dbConnection = async() => {

    try {
        mongoose.connect(process.env.DB_CONE, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            // useCreateIndex: true //!deprecated 
        });

        console.log('Data base is online');

    } catch (error){
        console.log(error);
        throw new Error('Database not initialized')
    }
}

module.exports = {
    dbConnection
}