const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());

//Declara que o corpo das requisções será feito em formato JSON
app.use(express.json());

//Declara que o as rotas usadas serão as definidas dentro do arquivo routes.js
app.use(routes);

app.listen(3333);