const express = require('express');
const router = express.Router();

// GET /users/signup (Página de Cadastro)
router.get('/signup', (req, res) => {
  res.send('<h1>Página de Cadastro (signup)</h1>');
});

// GET /users/signin ou /users (sem ID) -> Redireciona para /signup
router.get(['/', '/signin'], (req, res) => {
  res.redirect('/users/signup');
});

// GET /users/:userid -> Exibe mensagem com o ID informado
router.get('/:userid', (req, res) => {
  const { userid } = req.params;
  
  if (userid === 'signin') {
    return res.redirect('/users/signup');
  }

  res.send(`<h1>Bem-vindo(a), ${userid}!</h1>`);
});

module.exports = router;