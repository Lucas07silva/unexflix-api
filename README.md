# 🎬 UnexFlix API

API RESTful desenvolvida para gerenciamento do catálogo de filmes da **UnexFlix**, utilizando Node.js e Express. O projeto implementa operações CRUD com armazenamento temporário em memória.

## 📚 Sobre o projeto

Este projeto foi desenvolvido como parte da atividade **OAT 1 — Parte B: Construção de API RESTful CRUD com Express**, da disciplina Desenvolvimento de APIs, no curso de Sistemas de Informação da UNEX.

O objetivo é aplicar os conceitos de APIs REST, métodos HTTP, rotas, parâmetros, requisições JSON e códigos de status HTTP.

## 🚀 Tecnologias utilizadas

- **Node.js** — execução do JavaScript no servidor.
- **Express** — criação e gerenciamento das rotas da API.
- **JavaScript ES Modules** — organização dos módulos com `import` e `export`.
- **JSON** — formato de comunicação dos dados.

## ⚙️ Funcionalidades

- Listar todos os filmes cadastrados.
- Buscar um filme pelo ID.
- Cadastrar novos filmes.
- Atualizar informações de filmes existentes.
- Remover filmes do catálogo.
- Validar os campos obrigatórios no cadastro e na atualização.
- Retornar códigos HTTP adequados para cada operação.

## 📁 Estrutura do projeto

```text
unexflix-api/
├── server.js
├── package.json
└── README.md
```

> A pasta `node_modules` não deve ser enviada ao GitHub.

## 🛠️ Como executar o projeto

### 1. Pré-requisitos

Instale o [Node.js](https://nodejs.org/), que inclui o npm.

### 2. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd unexflix-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie a API

```bash
npm start
```

Se tudo estiver correto, o terminal exibirá:

```text
UnexFlix API rodando em http://localhost:3000
```

A API estará disponível em `http://localhost:3000`.

## 📡 Endpoints

| Método | Endpoint | Descrição | Resposta de sucesso |
|---|---|---|---|
| GET | `/filmes` | Lista todos os filmes | 200 OK |
| GET | `/filmes/:id` | Busca filme por ID | 200 OK |
| POST | `/filmes` | Cadastra um filme | 201 Created |
| PUT | `/filmes/:id` | Atualiza um filme | 200 OK |
| DELETE | `/filmes/:id` | Remove um filme | 204 No Content |

### 🎞️ Modelo de filme

Cada filme possui os seguintes atributos:

```json
{
  "id": 1,
  "titulo": "O Poderoso Chefão",
  "ano": 1972,
  "genero": "Drama"
}
```

### GET — Listar filmes

```http
GET /filmes
```

Retorna a lista completa de filmes cadastrados.

### GET — Buscar filme por ID

```http
GET /filmes/1
```

Retorna os dados do filme correspondente ao ID informado. Caso não exista, retorna `404 Not Found`.

### POST — Cadastrar filme

```http
POST /filmes
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "titulo": "Interestelar",
  "ano": 2014,
  "genero": "Ficção Científica"
}
```

Retorna `201 Created` com o objeto do filme cadastrado. Os campos obrigatórios devem ser informados.

### PUT — Atualizar filme

```http
PUT /filmes/1
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "titulo": "Interestelar",
  "ano": 2014,
  "genero": "Ficção Científica"
}
```

Atualiza os dados do filme indicado pelo ID e retorna o objeto atualizado. Se o filme não existir, retorna `404 Not Found`.

### DELETE — Remover filme

```http
DELETE /filmes/1
```

Remove o filme correspondente ao ID informado. Em caso de sucesso, retorna `204 No Content`, sem corpo de resposta.

## 📋 Códigos de status HTTP

| Código | Significado |
|---|---|
| `200 OK` | Requisição realizada com sucesso. |
| `201 Created` | Recurso criado com sucesso. |
| `204 No Content` | Recurso removido com sucesso, sem conteúdo na resposta. |
| `400 Bad Request` | Dados obrigatórios ausentes ou inválidos. |
| `404 Not Found` | Filme não encontrado. |

## 💾 Armazenamento dos dados

Os filmes são armazenados em um array JavaScript na memória do servidor. Por isso, os dados cadastrados ou modificados durante a execução não são persistidos após o encerramento ou reinício da aplicação.

Essa abordagem atende ao cenário proposto na atividade, que prevê armazenamento temporário enquanto o banco de dados definitivo não é implementado.

## 🎓 Informações acadêmicas

- **Instituição:** Centro Universitário de Excelência — UNEX
- **Curso:** Sistemas de Informação
- **Disciplina:** Desenvolvimento de APIs
- **Atividade:** OAT 1 — Parte B
- **Semestre:** 2026.2
- **Docente:** Prof. Ramon da Paixão Muricy



Projeto acadêmico
