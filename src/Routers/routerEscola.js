const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerEscola');


router.get('/Escolas', controller.getAll);
router.post('/CadastrarEscolas', controller.createEscola);



module.exports = router;