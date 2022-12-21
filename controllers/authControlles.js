
const { response } = require('express');
const { validationResult } = require('express-validator');


const registerUser = (req, res = response) => {

    const { name, email, password } = req.body;

    res.status(201).json ({
        ok: true,
        msg: 'register',
        name,
        email,
        password,
    })
}

const login = (req, res = response ) => {

    const { email, password } = req.body

  
    res.json ({
        ok: true,
        msg: 'login',
        email,  
        password
    })
}

const renew = (req, res = response) => {
    console.log(' se requiere /')
    res.json ({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    registerUser, 
    login,
    renew
}
