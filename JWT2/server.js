require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());

// Rotas
app.use('/jwt', authRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
