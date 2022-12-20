
const { response } = require('express');


const registerUser = (req, res = response) => {

    const { name, email, password } = req.body;

    if (name.length < 5){
        return res.status(400).json({
            ok:false,
            msg:'el nombre debe tener minimo 5 letras'
        })
    }

    res.json ({
        ok: true,
        msg: 'register',
        name,
        email,
        password,
    })
}

const login = (req, res = response) => {

    const { email, password } = req.body
    console.log(' se requiere /')
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
