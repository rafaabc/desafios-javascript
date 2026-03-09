/*
Desafio: Cadastro de Produtos em Promoção
Entradas: codigoDeBarras, nome, precoOriginal, percentualDesconto
Processamento: validar código único, preco > 0, desconto entre 0 e 90
Saída: retornar o último produto cadastrado
*/
const produtosEmPromocao = [];

export function cadastrarProdutoEmPromocao({
  codigoDeBarras,
  nome,
  precoOriginal,
  percentualDesconto,
}) {
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
