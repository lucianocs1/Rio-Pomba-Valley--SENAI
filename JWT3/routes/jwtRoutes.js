const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();

// Função auxiliar para gerar o JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Middleware para proteger rotas e validar o JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ success: false, message: 'Token não fornecido.' });
  }

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Token inválido.' });
    }
    req.userId = decoded.id; // Atribui o ID do usuário decodificado
    next();
  });
};

// Rota para gerar o JWT
router.post('/auth', (req, res) => {
  // Simulação de um ID de usuário (em um cenário real, validaria o login)
  const userId = 12345; 
  const token = generateToken(userId);

  res.json({
    success: true,
    message: 'Autenticação bem-sucedida',
    token,
  });
});

// Rota protegida para retornar a lista de métodos HTTP
router.get('/metodosHttp', verifyToken, (req, res) => {
  const httpMethods = {
    get: {
      objetivo_principal: "Recuperar informações do servidor",
      limite_caracteres: "Sem limites definidos no padrão HTTP",
      aceita_https: "Sim",
      aceita_http: "Sim",
    },
    put: {
      objetivo_principal: "Atualizar ou substituir um recurso existente",
      limite_caracteres: "Sem limites definidos no padrão HTTP",
      aceita_https: "Sim",
      aceita_http: "Sim",
    },
    post: {
      objetivo_principal: "Enviar dados para o servidor",
      limite_caracteres: "Sem limites definidos no padrão HTTP",
      aceita_https: "Sim",
      aceita_http: "Sim",
    },
    patch: {
      objetivo_principal: "Aplicar modificações parciais a um recurso",
      limite_caracteres: "Sem limites definidos no padrão HTTP",
      aceita_https: "Sim",
      aceita_http: "Sim",
    },
    delete: {
      objetivo_principal: "Remover um recurso do servidor",
      limite_caracteres: "Sem limites definidos no padrão HTTP",
      aceita_https: "Sim",
      aceita_http: "Sim",
    },
  };

  res.json(httpMethods);
});

module.exports = router;
