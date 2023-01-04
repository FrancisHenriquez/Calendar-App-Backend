
const { response } = require('express');
const { validationResult } = require('express-validator');
const { generarJWT } = require('../helpers/jwt')

const bcrypt = require('bcrypt');

const User = require('../models/User')


const registerUser = async (req, res = response) => {

    const { name, email, password } = req.body;

    try {
        let usuario = await User.findOne({ email });

        if ( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'User already register with this email'
            });
        }
      
        const user = new User( req.body );

        //* Encriptar contraseña 

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

                await user.save();
                
                //* Generar JWT

                const token = await generarJWT(usuario.id, usuario.name );



                res.status(201).json ({
                    ok: true,
                    msg: 'register',
                    uid: user.id,
                    name: user.name,
                    name
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

const login = async (req, res = response ) => {

    const { email, password } = req.body

    try {

        const usuario = await User.findOne({ email });

        if ( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'No user registered with this email address'
            });
        }

        //* confirmar passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if ( !validPassword )
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect Password'
            });

        //* Generar JWT (JSON WEB TOKEN)
        const token = await generarJWT(usuario.id, usuario.name );

        res.json ({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token

        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: 'internal error'
        })
        
    }

  
    
}

const renew = (req, res = response) => {
    console.log(' se requiere /')
    res.json ({
        ok: true,
        msg: 'renew'
    })
}

const revalidarToken = async (req, res = response) => {

    const uid = req.uid;
    const name = req.name;

    //* Generar un JWT y retornarlo

    const token = await generarJWT(uid, name);

        res.json ({
            ok: true,
           
            token

        })
}

module.exports = {
    registerUser, 
    login,
    renew,
    revalidarToken
}
