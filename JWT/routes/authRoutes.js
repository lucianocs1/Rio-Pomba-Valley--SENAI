const express = require('express');
const jwt = require('jsonwebtoken'); // Importa o módulo JSON Web Token
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const router = express.Router();

// Dados
const USERS = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Rota POST para login do usuário
router.post('/login', (req, res) => {
  const { usuario, senha } = req.body; // Obtém o usuário e senha do corpo da requisição

  // Verifica se as credenciais são válidas
  const user = USERS.find(u => u.username === usuario && u.password === senha);

  if (user) {
    // Gera um token JWT se as credenciais forem válidas
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Define a expiração do token para 1 hora
    });
    res.json({ token }); // Retorna o token no corpo da resposta
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' }); // Retorna erro se as credenciais forem inválidas
  }
});

module.exports = router;
