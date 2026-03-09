/*
Desafio: Registrar Livros na Biblioteca
Entradas: ISBN, titulo, autor, anoDePublicacao
Processamento: validar ano >1500 e <=2026
Saída: retornar último livro cadastrado
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
