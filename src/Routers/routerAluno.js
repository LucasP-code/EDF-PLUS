const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerAluno');
const middleware = require('../middlewares/middleware')

router.get('/Alunos', middleware.verifyToken, middleware.AlunoRole, controller.getAll);
router.get('/SuasCriancas', middleware.verifyToken, middleware.AlunoRole, controller.getAllCriancas)
router.post('/CadastrarAluno', middleware.validateEmail, middleware.validatePassword, controller.createAluno);

router.post('/CadastrarCrianca',  middleware.verifyToken, middleware.AlunoRole,controller.createCrianca);


module.exports = router;