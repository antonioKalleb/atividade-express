const express = require('express');
const app = express();
const PORT = 3000;

// Importação dos Roteadores
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Requisito 2: Middleware de aplicação para registro (log) de acesso
app.use((req, res, next) => {
  console.log(`[LOG] Acesso: ${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next();
});

// Middleware para processar requisições JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectando os roteadores às rotas base
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Requisito 5: Middleware para tratamento de erro 404 (Rota não encontrada)
app.use((req, res) => {
  res.status(404).send(`
    <h1>Erro 404 - Página Não Encontrada</h1>
    <p>A página que você procura não existe.</p>
    <a href="/">Voltar para a Página Inicial</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});