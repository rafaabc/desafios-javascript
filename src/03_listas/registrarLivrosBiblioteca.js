/*
Desafio: Registrar Livros na Biblioteca

Descrição:
Registra livros em uma coleção, validando o ano de publicação e retornando
o último livro cadastrado.

Regras:
- O ano de publicação deve ser maior que 1500 e menor ou igual a 2026.

Entrada:
- Objeto com `ISBN`, `titulo`, `autor`, `anoDePublicacao`.

Processamento:
- Validar o ano e inserir o livro na lista.

Saída:
- Retorna o último livro cadastrado.
*/

const livros = [];

export function registrarLivro({ ISBN, titulo, autor, anoDePublicacao }) {
  if (anoDePublicacao <= 1500 || anoDePublicacao > 2026) {
    throw new Error("O ano de publicação deve ser maior que 1500 e menor ou igual a 2026");
  }

  const livro = { ISBN, titulo, autor, anoDePublicacao };
  livros.push(livro);
  return livros.at(-1);
}
