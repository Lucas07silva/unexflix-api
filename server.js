
import express from "express";

const app = express();
const PORTA = 3000;

app.use(express.json());

// Catálogo inicial
let filmes = [
    { id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Drama" },
    { id: 2, titulo: "Matrix", ano: 1999, genero: "Ficção Científica" }
];

// Questão 1 — Listar todos os filmes
app.get("/filmes", (req, res) => {
    res.status(200).json(filmes);
});

// Questão 2 — Buscar filme por ID
app.get("/filmes/:id", (req, res) => {
    const id = Number(req.params.id);
    const filme = filmes.find(f => f.id === id);

    if (!filme) {
        return res.status(404).json({
            erro: "Filme não encontrado"
        });
    }

    res.status(200).json(filme);
});

// Questão 3 — Cadastrar novo filme
app.post("/filmes", (req, res) => {
    const { titulo, ano, genero } = req.body;

    if (
        titulo === undefined || titulo === null || titulo.trim?.() === "" ||
        ano === undefined || ano === null || ano === "" ||
        genero === undefined || genero === null || genero.trim?.() === ""
    ) {
        return res.status(400).json({
            erro: "Todos os campos (titulo, ano, genero) são obrigatórios"
        });
    }

    const novoFilme = {
        id: filmes.length
            ? Math.max(...filmes.map(f => f.id)) + 1
            : 1,
        titulo,
        ano,
        genero
    };

    filmes.push(novoFilme);

    res.status(201).json(novoFilme);
});

// Questão 4 — Atualizar filme
app.put("/filmes/:id", (req, res) => {
    const id = Number(req.params.id);
    const filme = filmes.find(f => f.id === id);

    if (!filme) {
        return res.status(404).json({
            erro: "Filme não encontrado"
        });
    }

    const { titulo, ano, genero } = req.body;

    if (
        titulo === undefined || titulo === null || titulo.trim?.() === "" ||
        ano === undefined || ano === null || ano === "" ||
        genero === undefined || genero === null || genero.trim?.() === ""
    ) {
        return res.status(400).json({
            erro: "Todos os campos (titulo, ano, genero) são obrigatórios"
        });
    }

    filme.titulo = titulo;
    filme.ano = ano;
    filme.genero = genero;

    res.status(200).json(filme);
});

// Questão 5 — Remover filme
app.delete("/filmes/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = filmes.findIndex(f => f.id === id);

    if (indice === -1) {
        return res.status(404).json({
            erro: "Filme não encontrado"
        });
    }

    filmes.splice(indice, 1);

    res.status(204).end();
});

// Iniciar servidor
app.listen(PORTA, () => {
    console.log(`UnexFlix API rodando em http://localhost:${PORTA}`);
});
