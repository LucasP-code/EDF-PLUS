const express = require('express');
const router = express.Router();

const controller = require('../controllers/Controller');


router.get('/Alunos', controller.getAll);


module.exports = router;