//Aqui é a parte da lógica.
//Recebe o "pedido" do cliente, busca no banco de dados e decide o que responder
//Serve para separar a "vontade do usuário" da "execução".
//O Controller não sabe se o banco é PostrGreSQL ou MongoDB, ele só pede os dados


const heroi = require('../models/exemplo');

module.exports = {
    async listar (req, res){ 
        const lista = await heroi.findAll();
        return res.json(lista); 
    }
}