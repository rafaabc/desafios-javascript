/*
Desafio 1: Sistema de Gestão de Livros
Parte A - Listar Livros
Você possui uma lista de livros previamente cadastrados:

"1984" de George Orwell, 328 páginas
"Dom Casmurro" de Machado de Assis, 256 páginas
"O Senhor dos Anéis" de J.R.R. Tolkien, 1178 páginas

Crie uma função que liste todos os livros.
Entrada
- N/A (a lista já está cadastrada)

Processamento
- Percorrer a lista de livros
- Formatar cada livro no padrão: "Livro: 1984 / Autor: George Orwell / Páginas: 328"

Saída
- Lista com todos os livros formatados

Parte B - Adicionar Livro
Crie uma função que adicione um novo livro à lista.

Entrada
- Título do livro
- Autor do livro
- Número de páginas

Processamento
- Adicionar o título, autor e páginas como um novo item da lista

Saída
- O último livro da lista
*/
const livros = [
  {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
  },
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    paginas: 256,
  },
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1178,
  },
];

export function listarLivros() {
  const livrosComFormatoDiferente = [];

  livros.forEach((livro) => {
    livrosComFormatoDiferente.push(
      `Livro: ${livro.titulo} / Autor: ${livro.autor} / Páginas: ${livro.paginas}`,
    );
  });
  return livrosComFormatoDiferente;
}

export function registrarLivro({ titulo, autor, paginas }) {
  livros.push({
    titulo: titulo,
    autor: autor,
    paginas: paginas,
  });

  return livros.at(-1);
}
