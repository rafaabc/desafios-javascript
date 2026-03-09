/*
Desafio: Gerenciar Livros (listar e registrar)

Descrição:
Operações para listar e registrar livros em uma coleção, com validação
dos campos, retornando o último livro cadastrado.

Regras:
- Ano de publicação (quando aplicável) deve estar em intervalo válido.

Entrada:
- Para listar: nenhuma.
- Para registrar: objeto com `titulo`, `autor` e `paginas`.

Processamento:
- Validar campos e adicionar o livro à lista.

Saída:
- Lista formatada ou o último livro registrado.
*/

const livros = [
  { titulo: "1984", autor: "George Orwell", paginas: 328 },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", paginas: 256 },
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", paginas: 1178 },
];

export function listarLivros() {
  const livrosComFormato = [];
  livros.forEach((livro) => {
    livrosComFormato.push(
      `Livro: ${livro.titulo} / Autor: ${livro.autor} / Páginas: ${livro.paginas}`,
    );
  });
  return livrosComFormato;
}

export function registrarLivro({ titulo, autor, paginas }) {
  livros.push({ titulo, autor, paginas });
  return livros.at(-1);
}
