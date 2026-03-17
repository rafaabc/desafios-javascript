/**
 * Desafio: Calcular desconto aplicado a um produto
 *
 * Descrição:
 * Dado o preço do produto e a porcentagem de desconto, calcule o valor do
 * desconto e o preço final, retornando a string:
 * "O valor do desconto é de R$ X e o preço final a pagar é de R$ Y.".
 *
 * Regras:
 * - `valorDoProduto` e `porcentagemDoDesconto` são números (porcentagem em 0-100).
 * - Calcule o desconto como (porcentagem / 100) * valorDoProduto.
 * - Retornar exatamente a string especificada.
 *
 * Entrada:
 * - `valorDoProduto`: número (R$)
 * - `porcentagemDoDesconto`: número (0-100)
 *
 * Processamento:
 * - Calcular `valorDoDesconto = (porcentagemDoDesconto / 100) * valorDoProduto`.
 * - `valorComDesconto = valorDoProduto - valorDoDesconto`.
 *
 * Saída:
 * - String: "O valor do desconto é de R$ X e o preço final a pagar é de R$ Y."
 */
export function calcularDesconto(valorDoProduto, porcentagemDoDesconto) {
  [["valorDoProduto", valorDoProduto], ["porcentagemDoDesconto", porcentagemDoDesconto]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const valorDoDesconto = (Number(porcentagemDoDesconto) / 100) * Number(valorDoProduto);
  const valorComDesconto = Number(valorDoProduto) - valorDoDesconto;

  return `O valor do desconto é de R$ ${valorDoDesconto} e o preço final a pagar é de R$ ${valorComDesconto}.`;
}
