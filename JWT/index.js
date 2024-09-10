const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Importa as rotas de autenticação
const productRoutes = require('./routes/productRoutes'); // Importa as rotas de produtos
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const app = express(); // Cria uma instância do aplicativo Express
const port = process.env.PORT || 4000; // Define a porta para o servidor

app.use(bodyParser.json()); // Middleware para analisar o corpo das requisições como JSON
app.use('/auth', authRoutes); // Configura a rota para autenticação
app.use('/produtos', productRoutes); // Configura a rota para produtos

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Server rodando em: ${port}`);
});
