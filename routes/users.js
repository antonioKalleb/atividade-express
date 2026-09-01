const express = require('express');
const router = express.Router();

// GET /users/signup (Cadastro)
router.get('/signup', (req, res) => {
  res.send('<h1>Página de Cadastro (signup)</h1>');
});

// GET /users/:userid? ou /users/signin/:userid?
// Atende a /users/:userid e redireciona se não houver userid
router.get('/:userid?', (req, res) => {
  const { userid } = req.params;

  // Requisito 4: se não houver userid, direciona para signup
  if (!userid || userid === 'signin') {
    return res.redirect('/users/signup');
  }

  // Requisito 3: exibe mensagem de boas-vindas com o userid
  res.send(`<h1>Bem-vindo(a), ${userid}!</h1>`);
});

module.exports = router;