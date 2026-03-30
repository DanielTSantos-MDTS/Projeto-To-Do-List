const Tarefa = require('../models/Tarefa');

module.exports = {
    async criar(req, res){
        try{
            const { titulo } = req.body;
            const novaTarefa = await Tarefa.create({ titulo });
            return res.status(201).json(novaTarefa);
        } catch (error){
            res.status(500).json('Erro ao criar a tarefa. Erro: ', error);
        }
    },
    async listar(req, res){
        try{
            const tarefas = await Tarefa.findAll();
            return res.json(tarefas);
        } catch(error){
            res.json("Erro ao listar tarefas. Erro: ", error);
        }
    },
    async atualizar(req, res){
        try{
            const { id } = req.params;
            const { titulo, concluida} = req.body;

            const tarefa = await Tarefa.findByPk(id);

            if(!tarefa){
                return res.status(404).json({ Erro: "Tarefa não encontrada"});
            }
            tarefa.titulo = titulo || tarefa.titulo;
            tarefa.concluida = concluida !== undefined ? concluida: tarefa.concluida;

            await tarefa.save();

            return res.json(tarefa);
        } catch (error){
            return res.status(500).json({ Erro: "Erro ao atualizar tarefa: ", error});
        }
    },
    async deletar(req, res){
        try{
            const {id } = req.params;
            const tarefa = await Tarefa.findByPk(id);

            if(!tarefa) return res.status(404).json({Erro: "Tarefa não encontrada"});

            await tarefa.destroy();
            return res.json({Mensagem: 'Tarefa Removida com Sucesso!'});
        } catch(error){
            res.status(404).json({Erro: "Erro ao deletar tarefa. Erro: ", error});
        }
    }
}