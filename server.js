const express = require('express');
const app = express();
const PORT = 3000;

// =========================================================================
// Requisito 2: Middleware de aplicação para registro (log) de acessos
// =========================================================================
app.use((req, res, next) => {
    const dataHora = new Date().toISOString();
    console.log(`[${dataHora}] Acesso à rota: ${req.url}`);
    next();
});

// =========================================================================
// Requisito 1: Middleware para cada uma das rotas principais
// =========================================================================

// Rota Index
app.get('/', (req, res) => {
    res.send('<h1>Página: Index</h1>');
});

// Rota Sign Up
app.get('/signup', (req, res) => {
    res.send('<h1>Página: Sign Up</h1>');
});

// =========================================================================
// Requisitos 3 e 4: Rotas de Sign In e tratamento com res.redirect()
// =========================================================================

// Requisito 3: Rota com parâmetro :userid exibindo mensagem de boas-vindas
app.get('/signin/users/:userid', (req, res) => {
    const userId = req.params.userid;
    res.send(`<h1>Bem-vindo(a), usuário ${userId}!</h1>`);
});

// Requisito 4: Acesso ao /signin sem o userid redireciona para /signup
app.get('/signin', (req, res) => {
    res.redirect('/signup');
});

// =========================================================================
// Requisito 5: Middleware de Erro 404 para rotas não encontradas
// =========================================================================
app.use((req, res) => {
    res.status(404).send(`
        <h1>Erro 404 - Página Não Encontrada</h1>
        <p>A página solicitada não existe.</p>
        <a href="/">Voltar para o Index</a>
    `);
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});