const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


const users = [{ id: 1, username: 'user1', password: 'password123' }];

// Endpoint de login para gerar o token JWT
router.post('/auth', (req, res) => {
  const { username, password } = req.body; // Extrai o nome de usuário e senha do corpo da requisição

  // Procura pelo usuário que corresponde ao nome de usuário e senha fornecidos
  const user = users.find(u => u.username === username && u.password === password);
  
  // Se não encontrar o usuário, retorna um erro 401 (não autorizado)
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  // Se encontrar o usuário, gera um token JWT contendo o id e o username
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '2h',  // Token expira em 2 horas
  });

  // Gera o timestamp atual (iat = issued at, ou "emitido em")
  const iat = Math.floor(Date.now() / 1000);  // Timestamp atual em segundos
  const exp = iat + 2 * 60 * 60;  // Calcula o timestamp de expiração, que é 2 horas depois

  // Retorna uma resposta JSON contendo o token gerado, o tempo de emissão (iat) e de expiração (exp)
  return res.json({
    token_id: token,  // O token gerado
    iat: new Date(iat * 1000).toISOString(),  // Converte o timestamp "iat" para uma string de data no formato ISO 8601
    exp: new Date(exp * 1000).toISOString(),  // Converte o timestamp "exp" para uma string de data no formato ISO 8601
  });
});

// Middleware para verificar se o token JWT é válido
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization; // Busca o token no cabeçalho "Authorization"

  // Se o cabeçalho "Authorization" estiver presente
  if (authHeader) {
    const token = authHeader.split(' ')[1];  // Extrai o token da string "Bearer <token>"
    
    // Verifica se o token é válido
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      // Se o token for inválido ou expirado, retorna um status 403 (proibido)
      if (err) {
        return res.sendStatus(403);
      }

      // Se o token for válido, adiciona o usuário à requisição (req.user) e prossegue
      req.user = user;
      next();
    });
  } else {
    // Se o token não estiver presente, retorna um status 401 (não autorizado)
    res.sendStatus(401);
  }
};

// Endpoint protegido que retorna uma lista de produtos se o token JWT for válido
router.get('/produtos', authenticateJWT, (req, res) => {
  // Lista de produtos fictícios para fins de exemplo
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.0 },
    { id: 2, nome: 'Produto 2', preco: 20.0 },
    { id: 3, nome: 'Produto 3', preco: 30.0 }
  ];

  // Retorna a lista de produtos em formato JSON
  res.json(produtos);
});

module.exports = router;
