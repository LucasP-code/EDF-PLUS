const express = require('express');
const app = express();
const routerAluno = require('./Routers/routerAluno');
const routerEscola = require('./Routers/routerEscola');
const cors = require('cors');

app.use(express.json());
app.use(cors())
app.use(routerAluno);
app.use(routerEscola);


module.exports = app;