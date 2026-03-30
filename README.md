# 🍕 Sistema de Pizzaria

Projeto desenvolvido com o objetivo de praticar desenvolvimento web, focando principalmente na criação de uma API simples usando Node.js e na integração com o front-end.

## 📌 Descrição

O sistema simula uma pizzaria, onde é possível visualizar produtos (como pizzas) com nome, descrição, preço e imagem.

Os dados são carregados a partir de um arquivo JSON, enquanto as imagens são armazenadas localmente no projeto.

Esse projeto foi feito com foco em aprendizado, para entender melhor como funciona a comunicação entre cliente (front-end) e servidor (back-end).

## 🎯 Objetivo

* Aprender a criar um servidor com Node.js
* Entender como funciona uma API simples
* Trabalhar com arquivos JSON como “banco de dados”
* Integrar back-end com front-end
* Organizar melhor a estrutura de um projeto

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* HTML
* CSS

## 📁 Estrutura do projeto

/backend

* server.js → responsável pelo servidor e rotas
* data → arquivos JSON com os dados
* fotos → imagens dos produtos

/frontend

* index.html → página principal
* style.css → estilos
* script.js → lógica do front-end

## 🔗 Funcionamento da API

A API retorna os dados dos produtos em formato JSON.

Exemplo de rota:

* GET `/produtos` → retorna todos os produtos

Os dados são lidos diretamente do arquivo JSON, sem uso de banco de dados.

## ▶️ Como executar o projeto

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git](https://github.com/pietroxz777/Site-Pizzaria.git)
```

2. Acesse a pasta do projeto:

```
cd seu-repositorio
```

3. Instale as dependências:

```
npm install
```

4. Inicie o servidor:

```
node server.js
```

5. Abra o arquivo `frontend/index.html` no navegador.

## 📚 Aprendizados

Durante o desenvolvimento, foram praticados conceitos como:

* Criação de rotas com Express
* Uso de JSON para armazenar dados
* Separação entre front-end e back-end
* Consumo de API no JavaScript
* Organização de pastas em um projeto

## 👨‍💻 Autores

Pietro Pardim Vieira
João Pedro Nascimento Ferreira

"Assim como o ferro com o ferro se aguça, assim o homem afia o rosto do seu amigo." — Provérbios 27:17
