const express = require('express');
const db = require('./src/config/database')
const app = express();
const port = process.env.PORT || 3000;
const Tarefa = require('./src/models/Tarefa');
const tarefaRoutes = require('./src/routes/tarefaRoutes');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(tarefaRoutes);

app.get('/', (req, res) => {
    res.send('Olá! O nosso prédio de código já está de pé');
});

async function testarConexão(){
    try{
        await db.authenticate();
        await db.sync();
        console.log('Conexão e Sincronização reaizados com sucesso!');
    } catch (error){
        console.error('Erro ao conectar ou sincronizar. Erro: ', error);
    }
}

testarConexão();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Exemplo de prática



// const express = require('express');
// const exemploRouter = require('./src/routes/exemploRouter');


// const app = express();
// app.use(express.json()); //O app.use() serve como um "filtro de linha", ele instala um midware, um segurança
//Isso diz ao servidor "Para TODA visita que chegar, primeiro passe pelo filtro para transformar o que eles trouxeram em um objeto que eu entenda"
// app.use(exemploRouter);

// app.listen(3000, () => console.log('Servidor Rodando!'));
//o app.listen(...), coloca o código em "Modo espera". Ele ocupa uma porta e fica "ouvindo"
//Enquanto o computador estiver ligado, o código estará lá, acordado e rodando, esperando alguém bater na porta
