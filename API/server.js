const express = require("express");
const api = express();
const porta = 8080;

const API_KEY = "123456";

function authenticate(req, res, next) {
  const apiKey = req.query.apiKey;

  if (apiKey === API_KEY) {
    next();
  } else {
    res.status(401).json({
      mensagem: "acesso nao autorizado",
      cod_status: 401,
    });
  }
}

api.use(authenticate);

api.get("/", (req, res) => {
  const rotapadrao = {
    nome_rota: "/",
    codigo_status: "200",
    metodo: "GET",
  };
  res.status(200);
  res.json(rotapadrao);
});

api.post("/cliente/novo", (req, res) => {
  const response = {
    mensagem: "Cliente criado com sucesso",
    status: 201,
  };
  res.status(201);
  res.json(response);
});

api.put("/cliente/update/cpfcnpj/12345678901", (req, res) => {
  const response = {
    mensagem: "Dados atualizados com sucesso",
    status: 200,
  };
  res.status(200);
  res.json(response);
});

api.delete("/cliente/delete", (req, res) => {
  const response = {
    mensagem: "Cliente deletado com sucesso",
    status: 200,
  };
  res.status(200);
  res.json(response);
});

api.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}`);
});
