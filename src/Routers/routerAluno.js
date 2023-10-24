const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerAluno');


router.get('/Alunos', controller.getAll);
router.post('/CadastrarAluno', controller.createAluno);

module.exports = router;