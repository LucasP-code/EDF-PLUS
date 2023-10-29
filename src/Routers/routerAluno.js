const express = require('express');
const router = express.Router();

const controllerLogin = require('../controllers/controllerLogin')
const controller = require('../controllers/controllerAluno');
const middleware = require('../Middlewares/middleware');

router.get('/Alunos', controller.getAll);
router.post('/CadastrarAluno', middleware.validatePassword ,controller.createAluno);
router.post('/Login' , middleware.validateLogin, controllerLogin.userLogin);


module.exports = router;