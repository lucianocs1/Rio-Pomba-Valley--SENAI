const express = require('express')
const api = express()
const porta = 8080

api.get('/', (req, res) => {
        const rotapadrao = 
            {
                nome_rota: '/',
                codigo_status: '200',
                metodo: 'GET'
            }
            res.status(200)
            res.json(rotapadrao)
})

api.post('/cliente/novo', (req, res) => {
    const response = [

        {
            mensagem: 'Cliente criado com sucesso',
            status: 201
        }
    ]
    res.status(201)
    res.json(response)
})

api.listen(porta, () =>{
    console.log(`Servidor rodando na porta: ${porta}`)
})