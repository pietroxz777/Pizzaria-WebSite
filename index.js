// ===============================
// CONFIGURAÇÃO DO SERVIDOR
// - dotenv: carrega variáveis de ambiente
// - express: cria o app do servidor
// - cors: permite requisições de outras origens
// - path: auxilia no gerenciamento de caminhos de arquivos
// - app.use(cors()): habilita CORS
// - app.use(express.json()): habilita parsing de JSON nas requisições
// - app.use(express.static(...)): serve arquivos estáticos do front-end
// ===============================

require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ===============================
// ROTAS DO SERVIDOR
// - app.use('/api', routes): define o prefixo das rotas da API
// - app.get('/teste', ...): rota de teste da API
// - app.get('*', ...): serve o front-end para todas as demais rotas
// ===============================

const { ready } = require('./src/database/sqlite');
const routes    = require('./src/routes/index');

ready.then(() => {
  app.use('/api', routes);

  app.get('/teste', (req, res) => {
    res.json({ mensagem: 'API da Pizzaria funcionando!', status: 'online', porta: PORT });
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

// ===============================
// INICIALIZAÇÃO DO SERVIDOR
// - app.listen(PORT, ...): inicia o servidor na porta definida
// - Logs mostram onde acessar a API e o front-end
// - Caso ocorra erro na conexão com o banco, loga e encerra o processo
// ===============================
  app.listen(PORT, () => {
    console.log('=================================');
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`API: http://localhost:${PORT}/api`);
    console.log(`Front-end: http://localhost:${PORT}`);
    console.log('=================================');
  });
}).catch(err => {
  console.error('Erro ao inicializar banco:', err);
  process.exit(1);
});
