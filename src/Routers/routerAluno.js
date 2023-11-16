const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerAluno');
const middleware = require('../Middlewares/middleware');

router.get('/Alunos', middleware.verifyToken, middleware.AlunoRole, controller.getAll);

router.get('/InfoAluno', middleware.verifyToken, middleware.AlunoRole, controller.getAllInfoAluno);
router.get('/SuasCriancas', middleware.verifyToken, middleware.AlunoRole, controller.getAllCriancas);
router.post('/CadastrarAluno', middleware.validateEmail, middleware.validateCPF, middleware.validatePassword, controller.createAluno);
router.post('/CadastrarCrianca',  middleware.verifyToken, middleware.AlunoRole, middleware.validateCPF,controller.createCrianca);


module.exports = router;