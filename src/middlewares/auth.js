// ===============================
// AUTENTICAÇÃO COM TOKEN
// - Verifica se o usuário enviou um token JWT
// - Se tiver token e for válido, deixa a pessoa continuar
// - Se não tiver ou for inválido, mostra erro 401
// ===============================

const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token      = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido. Faça login.' });
  }

  try {
    const payload  = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario    = payload;
    next();
  } catch (erro) {
    return res.status(401).json({ erro: 'Token inválido ou expirado.' });
  }
}

module.exports = autenticar;
