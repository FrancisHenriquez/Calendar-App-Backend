
/* 
    Users routes / Authorisation 
    


*/

const { Router } = require('express');
const { registerUser, login, renew } = require('../controllers/authControlles');
const router = Router();


router.post('/register', registerUser );

router.post('/', login );

router.get('/renew', renew );

module.exports = router;
