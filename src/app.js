const express = require('express');
const app = express();
const router = require('./Routers/router');

app.use(router);

module.exports = app;