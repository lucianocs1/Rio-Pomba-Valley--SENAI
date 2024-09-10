const express = require('express');
const authMiddleware = require('../middleware/authMiddleware'); // Importa o middleware de autenticação

const router = express.Router();

// Dados fictícios de produtos
const PRODUTOS = [
  { id: 1, nome: 'escova de dente', preco: '10.00' },
  { id: 2, nome: 'shampoo', preco: '40.00' }
];

// Rota GET para obter a lista de produtos
// Usa o middleware de autenticação para proteger a rota
router.get('/', authMiddleware, (req, res) => {
  res.json({ produtos: PRODUTOS }); // Retorna a lista de produtos
});

module.exports = router;
