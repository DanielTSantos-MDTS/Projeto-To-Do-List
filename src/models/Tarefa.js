const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Tarefa = db.define('Tarefa', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'todo'
    },
    autor: {
        type: DataTypes.STRING
    }
});

module.exports = Tarefa;