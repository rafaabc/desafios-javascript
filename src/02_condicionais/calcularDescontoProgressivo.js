/**
 * Desafio: Calculadora de Desconto Progressivo
 *
 * Descrição:
 * Recebe o valor de um produto e aplica desconto progressivo conforme faixas
 * de preço, retornando uma descrição com valor original, desconto aplicado
 * e valor final.
 *
 * Regras:
 * - Valores abaixo de R$ 100.01 têm 0% de desconto.
 * - Valores entre R$ 100.01 e R$ 500.00 têm 10% de desconto.
 * - Valores acima têm 20% de desconto.
 *
 * Entrada:
 * - `valorDoProduto`: número (R$)
 *
 * Processamento:
 * - Determinar faixa e calcular `valorDoDesconto` e `valorComDesconto`.
 *
 * Saída:
 * - String: "Valor original: R$ X, Desconto aplicado: P% e Valor final a pagar: R$ Y."
 */
export function calcularDescontoProgressivo(valorDoProduto) {
  [["valorDoProduto", valorDoProduto]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const valor = Number(valorDoProduto);
  const desconto = valor >= 500.01 ? 20 : valor >= 100.01 ? 10 : 0;
  const valorDoDesconto = (desconto / 100) * valor;
  const valorComDesconto = valor - valorDoDesconto;

  return `Valor original: R$ ${valor}, Desconto aplicado: ${desconto}% e Valor final a pagar: R$ ${valorComDesconto}.`;
}
