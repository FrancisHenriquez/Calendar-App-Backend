
const { response } = require('express');


const registerUser = (req, res = response) => {

    res.json ({
        ok: true,
        msg: 'register'
    })
}

const login = (req, res = response) => {
    console.log(' se requiere /')
    res.json ({
        ok: true,
        msg: 'login'
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
