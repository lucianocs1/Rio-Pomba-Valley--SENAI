const express = require('express');
const app = express();
require('dotenv').config(); // Carregar variáveis de ambiente do .env

// Importa as rotas que criamos
const jwtRoutes = require('./routes/jwtRoutes');

// Middleware para processar JSON
app.use(express.json());

// Usa as rotas definidas no arquivo jwtRoutes
app.use('/jwt', jwtRoutes);

// Define a porta do servidor
const PORT = process.env.PORT || 3000; // Usa a porta definida no .env ou 3000 como padrão

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
