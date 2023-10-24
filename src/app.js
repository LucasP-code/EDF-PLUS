const express = require('express');
const app = express();
const routerAluno = require('./Routers/routerAluno');
const routerEscola = require('./Routers/routerEscola');

app.use(express.json());

app.use(routerAluno);
app.use(routerEscola);


module.exports = app;