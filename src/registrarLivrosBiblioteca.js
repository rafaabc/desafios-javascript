/*
Desafio 1: Sistema de Cadastro de Livros em Biblioteca
Você precisa criar uma função capaz de registrar livros de uma biblioteca.
Cada livro possui as seguintes informações: ISBN, título, autor e ano de publicação.
Regras de validação:

O título e autor podem ser repetidos
O ano de publicação deve ser maior que 1500 e menor ou igual a 2026

Ao final, a função deve retornar:

O último livro cadastrado
*/

const livros = [];

export function registrarLivro({ ISBN, titulo, autor, anoDePublicacao }) {
  if (anoDePublicacao <= 1500 || anoDePublicacao >= 2027) {
    throw new Error(
      "O ano de publicação deve ser maior que 1500 e menor ou igual a 2026",
    );
  }

  livros.push({
    ISBN: ISBN,
    titulo: titulo,
    autor: autor,
    anoDePublicacao: anoDePublicacao,
  });
  return livros.at(-1);
}
