/*
Desafio 10: Sistema de Cadastro de Produtos em Promoção
Você precisa criar uma função capaz de registrar produtos em promoção de um supermercado.
Cada produto possui as seguintes informações: código de barras, nome, preço original e percentual de desconto.
Regras de validação:

O código de barras não pode se repetir
O nome pode ser repetido
O preço original deve ser maior que 0
O percentual de desconto deve ser maior que 0 e menor ou igual a 90

Ao final, a função deve retornar:

o último produto cadastrado
*/
const produtosEmPromocao = [];

export function cadastrarProdutoEmPromocao({
  codigoDeBarras,
  nome,
  precoOriginal,
  percentualDesconto,
}) {
  // Validação do código de barras
  if (
    produtosEmPromocao.some(
      (produto) => produto.codigoDeBarras === codigoDeBarras,
    )
  ) {
    throw new Error("Código de barras já existe.");
  }

  if (precoOriginal <= 0) {
    throw new Error("O preço original deve ser maior que 0.");
  }

  if (percentualDesconto <= 0 || percentualDesconto > 90) {
    throw new Error(
      "O percentual de desconto deve ser maior que 0 e menor ou igual a 90.",
    );
  }

  const produto = {
    codigoDeBarras,
    nome,
    precoOriginal,
    percentualDesconto,
  };

  produtosEmPromocao.push(produto);

  return produtosEmPromocao.at(-1);
}
