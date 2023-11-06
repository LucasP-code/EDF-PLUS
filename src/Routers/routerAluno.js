const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerAluno');
const middleware = require('../middlewares/middleware')

router.get('/Alunos', controller.getAll);
router.post('/CadastrarAluno', middleware.validateEmail, middleware.validatePassword, controller.createAluno);

router.post('/CadastrarCrianca', controller.createCrianca);


module.exports = router;