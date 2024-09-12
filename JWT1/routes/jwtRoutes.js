const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Definições das claims JWT comuns
const jwtClaims = {
    "sub": "Subject - Identificador do usuário ou entidade que é o assunto do token.",
    "iss": "Issuer - Entidade que emitiu o token.",
    "exp": "Expiration - Data e hora em que o token expira.",
    "iat": "Issued At - Data e hora em que o token foi emitido.",
    "aud": "Audience - Destinatário do token.",
    "nbf": "Not Before - Data e hora antes da qual o token não deve ser aceito.",
    "jti": "JWT ID - Identificador único do token."
};

// Rota para listar todas as JWT claims
router.get('/jwt/claims', (req, res) => {
    res.json({ claims: jwtClaims });
});

// Rota para identificar ID, data de geração e expiração do JWT
router.get('/jwt/tokenid', (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(400).json({ error: 'Token não fornecido.' });
    }

    try {
        const decoded = jwt.decode(token, { complete: true });

        if (!decoded) {
            return res.status(400).json({ error: 'Token inválido.' });
        }

        const { header, payload } = decoded;

        res.json({
            header: header,
            id: payload.jti || 'Não disponível',
            issuedAt: payload.iat ? new Date(payload.iat * 1000).toISOString() : 'Não disponível',
            expiresAt: payload.exp ? new Date(payload.exp * 1000).toISOString() : 'Não disponível'
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao decodificar o token.' });
    }
});

module.exports = router;
