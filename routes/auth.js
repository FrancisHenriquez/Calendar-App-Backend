
/* 
    Users routes / Authorisation 
    


*/

const { Router } = require('express');
const { registerUser, login, renew } = require('../controllers/authControlles');
const router = Router();
const { check } = require('express-validator');


router.post('/register', 
    [ //*middlewares
    check('name', 'Name needed').not().isEmpty(),
    check('email', 'Email needed').isEmail(),
    check('password', 'Password needed').isLength({min: 6})
    ]
    ,
    registerUser );

router.post('/',
    [//*middlewares
    check('email', 'Email needed').isEmail(),
    check('password', 'Password needed').isLength({min: 6})
    ],
    login );
    
router.get('/renew', renew );

module.exports = router;
