const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerAluno');


router.get('/Alunos', controller.getAll);
router.post('/CadastrarAluno', controller.createAluno);

router.post('/CadastrarCrianca', controller.createCrianca);

module.exports = router;