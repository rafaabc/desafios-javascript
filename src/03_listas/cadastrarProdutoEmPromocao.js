/**
 * Desafio: Cadastro de Produtos em Promoção
 *
 * Descrição:
 * Cadastra produtos em promoção garantindo código de barras único,
 * preço válido e percentual de desconto aceitável, retornando o último
 * produto cadastrado.
 *
 * Regras:
 * - `codigoDeBarras` não pode se repetir.
 * - `precoOriginal` deve ser > 0.
 * - `percentualDesconto` deve ser > 0 e <= 90.
 *
 * Entrada:
 * - `codigoDeBarras`, `nome`, `precoOriginal`, `percentualDesconto`
 *
 * Processamento:
 * - Validar unicidade e limites; criar objeto e adicioná-lo à lista.
 *
 * Saída:
 * - Retorna o último produto cadastrado (objeto).
 */
const produtosEmPromocao = [
  { codigoDeBarras: "0001", nome: "Sabão", precoOriginal: 5, percentualDesconto: 10 },
  { codigoDeBarras: "0002", nome: "Arroz", precoOriginal: 20, percentualDesconto: 5 },
];

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
