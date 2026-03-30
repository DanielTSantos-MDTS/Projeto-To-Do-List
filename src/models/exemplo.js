//Aqui define a estruturação dos dados.
//É uma regra que diz "Nesta tabela, todo herói DEVE ter um nome, que é um texto"
// Garante a integridade dos dados e evita bagunça do banco de dados.


const { DataTypes } = require('sequelize'); //Require serve para importar as ferramentas
const db = require('../config/database');

const Heroi = db.define('Heroi', { //o db.define serve para criar a tabela no banco de dados
    nome: {type: DataTypes.STRING},
    poder: {type: DataTypes.STRING}
});

module.exports = Heroi; //Exportação única, onde entrega uma coisa só
//Mas tem também exports de exportação múltipla exemplo:
//module.exports = {Heroi, Vilao}; (ele envia os dois juntos)