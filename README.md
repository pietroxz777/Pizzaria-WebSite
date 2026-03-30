# Sistema de Pizzaria
* 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de praticar desenvolvimento web, com foco na criação de uma API utilizando Node.js e na integração com o front-end.

A aplicação simula uma pizzaria, permitindo visualizar produtos com nome, descrição, preço e imagem, além de utilizar uma estrutura mais organizada com rotas, models e banco de dados.

# 🖼️ Preview

<img width="238" height="574" alt="image" src="https://github.com/user-attachments/assets/eebe4799-bb56-46e0-88ac-96a1c2303a1e" />

# ⚙️ Funcionalidades
* Listagem de pizzas
Cadastro de clientes
Registro de pedidos
Organização por rotas
Integração com API
Uso de banco de dados SQLite
# 🛠️ Tecnologias
Back-end	Front-end
Node.js	HTML
Express	CSS
SQLite	JavaScript
# 📁 Estrutura do projeto
## 📁 Estrutura do projeto

```bash
website-pizzaria/
│
├── public/              # Front-end
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── src/                 # Back-end
│   ├── database/        # Configuração do banco de dados
│   │   └── sqlite.js
│   │
│   ├── middlewares/     # Middlewares da aplicação
│   │   └── auth.js
│   │
│   ├── models/          # Models (estrutura dos dados)
│   │   ├── Cliente.js
│   │   ├── Pedido.js
│   │   ├── Pizza.js
│   │   └── Usuario.js
│   │
│   └── routes/          # Rotas da aplicação
│       └── index.js
│
├── index.js             # Inicialização do servidor
├── seed.js              # Script para popular o banco
├── pizzaria.db          # Banco de dados SQLite
├── .env                 # Variáveis de ambiente
├── .gitignore
└── README.md
```
# 🔄 Funcionamento
Parte	Responsabilidade
Back-end	Rotas, lógica e banco de dados
Front-end	Interface e consumo da API
Banco	Armazenamento de dados
# ▶️ Como executar
1. Clonar o repositório
git clone https://github.com/pietroxz777/Pizzaria-WebSite.git
2. Acessar a pasta
cd Pizzaria-WebSite
3. Instalar dependências
npm install
4. Iniciar servidor
node index.js
5. Acessar no navegador
http://localhost:3000
# 📌 Observações
O banco SQLite já está incluído no projeto
O arquivo seed.js pode ser usado para popular o banco
O front-end está na pasta public
# 🚀 Melhorias futuras
Sistema de login
Carrinho de compras
Painel administrativo
Deploy online
Melhor responsividade
# 👨‍💻 Autores

* Pietro Pardim Vieira
* João Pedro Nascimento Ferreira
