/*
Desafio: Gerenciar Livros (listar e registrar)
Entradas: (listar) nenhuma, (registrar) titulo, autor, paginas
Processamento: manter lista de livros e formatar saída
Saída: lista formatada / último livro cadastrado
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
