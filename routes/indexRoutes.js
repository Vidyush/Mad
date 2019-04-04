const express = require('express');
const router = express.Router(); 
const  indexController =  require('../controllers/indexController');

router.get('/',indexController.loginForm);
router.post('/login',indexController.login);
router.get('/dashboard',indexController.getTopUser);


module.exports = router;
