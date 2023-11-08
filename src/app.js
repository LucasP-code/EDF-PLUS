const express = require('express');
const app = express();
const cors = require('cors');


const routerAluno = require('./Routers/routerAluno');
const routerLogin = require('./Routers/routerLogin');

app.use(express.json());
app.use(cors())

app.use(routerAluno);
app.use(routerLogin);



module.exports = app;