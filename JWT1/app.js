
const express = require('express');
const app = express();
const jwtRoutes = require('./routes/jwtRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Usar as rotas definidas em jwtRoutes
app.use('/api', jwtRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
