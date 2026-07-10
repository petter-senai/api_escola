# Projeto CRUD - Node.js + Express + MySQL + Front-end

Este projeto demonstra a criação de uma aplicação **CRUD (Create, Read, Update e Delete)** utilizando:

- Node.js
- Express
- MySQL
- HTML
- JavaScript (Fetch API)

O objetivo é apresentar uma comunicação completa entre **Front-end**, **Back-end** e **Banco de Dados**, utilizando uma API REST.

---

# Funcionalidades

- Listar cursos
- Buscar curso por ID
- Cadastrar curso
- Editar curso
- Excluir curso

---

# Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- mysql2
- CORS
- HTML5
- JavaScript
- Fetch API

---

# Estrutura do Projeto

```text
projeto/
│
├── backend/
│   ├── node_modules/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── frontend/
    ├── index.html
    └── script.js
```

---

# Instalação

## 1. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/projeto-crud.git
```

Entre na pasta do projeto:

```bash
cd projeto
```

---

## 2. Instalar as dependências

Entre na pasta do backend:

```bash
cd backend
```

Inicialize o projeto:

```bash
npm init -y
```

Instale as dependências:

```bash
npm install express mysql2 cors
```

---

# Criando o Banco de Dados

Execute o script abaixo no MySQL.

```sql
CREATE DATABASE escola;

USE escola;

CREATE TABLE cursos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

INSERT INTO cursos(nome)
VALUES
('Node JS'),
('JavaScript'),
('React Native');
```

---

# Configuração da Conexão

Arquivo:

```text
backend/db.js
```

Configure as informações do seu banco de dados.

```javascript
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'escola'
});
```

Caso utilize outro usuário ou senha, altere os valores acima.

---

# Executando o Back-end

Na pasta **backend**, execute:

```bash
node server.js
```

Se tudo estiver correto, será exibida a mensagem:

```text
Banco conectado com sucesso!
Servidor rodando em http://localhost:3000
```

---

# Executando o Front-end

Abra o arquivo

```text
frontend/index.html
```

em um navegador.

Você também pode utilizar a extensão **Live Server** do VS Code.

---

# Rotas da API

## Listar todos os cursos

```http
GET /cursos
```

---

## Buscar curso por ID

```http
GET /cursos/:id
```

Exemplo:

```http
GET /cursos/1
```

---

## Cadastrar curso

```http
POST /cursos
```

Body:

```json
{
    "nome":"Java"
}
```

---

## Atualizar curso

```http
PUT /cursos/:id
```

Body:

```json
{
    "nome":"Java Avançado"
}
```

---

## Excluir curso

```http
DELETE /cursos/:id
```

---

# Interface

A aplicação possui uma interface simples desenvolvida em HTML e JavaScript que permite:

- Cadastrar cursos;
- Listar cursos cadastrados;
- Editar cursos;
- Excluir cursos.

Toda comunicação é realizada utilizando a **Fetch API**, consumindo a API REST desenvolvida com Express.

---

# Fluxo da Aplicação

```text
Usuário
   │
   ▼
Front-end (HTML + JavaScript)
   │
   ▼
Fetch API
   │
   ▼
Express (API REST)
   │
   ▼
MySQL
```

---

# Conceitos Trabalhados

Durante o desenvolvimento deste projeto são praticados os seguintes conceitos:

- Organização de projetos;
- API REST;
- Métodos HTTP;
- Express;
- Rotas;
- JSON;
- Fetch API;
- Comunicação Cliente x Servidor;
- Banco de Dados MySQL;
- CRUD;
- Async/Await;
- Manipulação do DOM.

---

# Melhorias Futuras

Algumas melhorias que podem ser implementadas:

- Tela de Login;
- Autenticação com JWT;
- Criptografia de senha (bcrypt);
- Middleware de autenticação;
- Validação dos dados;
- Tratamento de erros;
- Paginação;
- Pesquisa de cursos;
- Interface com CSS;
- Responsividade;
- Deploy da API.

---

# Autor

Projeto desenvolvido para fins educacionais, demonstrando a integração entre **Node.js**, **Express**, **MySQL** e **JavaScript**, utilizando a arquitetura de uma API REST.
