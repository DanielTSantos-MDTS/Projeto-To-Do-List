const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Tarefa = db.define('Tarefa', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Tarefa;