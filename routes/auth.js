
/* 
    Users routes / Authorisation 
    
*/

const { Router } = require('express');
const { registerUser, login, renew, revalidarToken } = require('../controllers/authControlles');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/field-valid')
const  { validarJWT, } = require('../middlewares/validar-jwt')


router.post('/register', 
    [ //*middlewares
    check('name', 'Name needed').not().isEmpty(),
    check('email', 'Email needed').isEmail(),
    check('password', 'Password needs at least 6 characters').isLength({min: 6}), validarCampos
    ]
    ,
    registerUser );

router.post('/',
    [//*middlewares
    check('email', 'Email needed').isEmail(),
    check('password', 'Password needs at least 6 characters').isLength({min: 6}), validarCampos
    ],
    login );
    
router.get('/renew', validarJWT, revalidarToken );

module.exports = router;
