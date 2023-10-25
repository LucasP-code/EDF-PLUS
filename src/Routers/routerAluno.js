const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerAluno');
const middleware = require('../Middlewares/middleware');

router.get('/Alunos', controller.getAll);
router.post('/CadastrarAluno', middleware.validatePassword ,controller.createAluno);

module.exports = router;