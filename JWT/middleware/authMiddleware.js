const jwt = require('jsonwebtoken'); // Importa o módulo JSON Web Token

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']; // Obtém o token do cabeçalho Authorization

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' }); // Retorna erro se o token não for fornecido
  }

  // Verifica o token JWT
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' }); // Retorna erro se o token for inválido
    }
    req.user = decoded; // Adiciona o usuário decodificado ao objeto da requisição
    next(); // Continua para o próximo middleware ou rota
  });
};

module.exports = authMiddleware;
