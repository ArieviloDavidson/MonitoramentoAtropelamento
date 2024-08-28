const status = require('http-status'); // Lida com os status do servidor (erros também)
const mysql = require('mysql2'); // Pacote que interage com o banco de dados
const cors = require('cors'); // Para permitir que o servidor aceite requisições externas
const express = require('express'); // Cria e Gerencia o servidor WEB
const routes = require('./src/routes/routes'); // Rotas definidas para cada tipo de requisição

const app = express();

// Inicializador
app.use(express.json());
app.use(cors());

// Configurar a conexão com o banco de dados usando mysql2
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registro_atropelamentos'
});

// Verificação de erro na conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conectado com sucesso ao banco de dados!');
});

// Passar a conexão para os controladores através do middleware (agora "connection faz parte do objeto req")
app.use((req, res, next) => {
    req.db = connection;
    next();
});

app.use('/sistema', routes); // Rota principal

// Tratamento de erros nas ROTAS
app.use((req, res, next) => {
    res.status(status.NOT_FOUND).send("Erro 404: A página ou recurso solicitado não foi encontrado. Por favor, verifique o endereço inserido ou consulte a documentação da API para mais informações.");
});

// Tratamento de erros gerais
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(status.INTERNAL_SERVER_ERROR).json({ error: err.message });
});

// Iniciar o servidor

const port = 3003; // Porta definida no código
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});