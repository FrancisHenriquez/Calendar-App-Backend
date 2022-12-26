
const { response } = require('express');
const { validationResult } = require('express-validator');

const User = require('../models/User')


const registerUser = async (req, res = response) => {

    // const { name, email, password } = req.body;

    try {
        const user = new User( req.body );

                await user.save();



                res.status(201).json ({
                    ok: true,
                    msg: 'register',
                    name,
                    email,
                    password,
                })

                res.status(201).json({
                    ok: true,
                    msg:  'registro'
                })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'internal error'
        })
        
    }

    
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
