//Aqui é com ose fosse um mapa, as rotas são apenas os endereços
//Elas dizem ao servidor "Se alguém chegar batendo na porta /exemplo usando o método GET, leve até o controller de listagem"


const express = require('express');
const router = express.Router();
const exemploController = require('../controllers/exemploController');

router.get('/exemplo', exemploController.listar);

module.exports = router;