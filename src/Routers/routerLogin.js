const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerLogin');
const middleware = require('../middlewares/middleware');

router.post('/Login' ,controller.login,);


module.exports = router;

