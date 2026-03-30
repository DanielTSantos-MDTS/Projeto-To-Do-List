const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

router.post('/tarefas', TarefaController.criar);
router.get('/tarefas', TarefaController.listar);
router.put('/tarefas/:id', TarefaController.atualizar);
router.delete('/tarefas/:id', TarefaController.deletar);

module.exports = router;