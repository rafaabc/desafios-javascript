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
  if (valorDoProduto >= 0.01 && valorDoProduto < 100.01) {
    const valorComDesconto = valorDoProduto;
    return `Valor original: R$ ${valorDoProduto}, Desconto aplicado: 0% e Valor final a pagar: R$ ${valorComDesconto}.`;
  } else if (valorDoProduto >= 100.01 && valorDoProduto < 500.01) {
    const desconto = 10;
    const valorDoDesconto = (desconto / 100) * valorDoProduto;
    const valorComDesconto = valorDoProduto - valorDoDesconto;
    return `Valor original: R$ ${valorDoProduto}, Desconto aplicado: ${desconto}% e Valor final a pagar: R$ ${valorComDesconto}.`;
  } else {
    const desconto = 20;
    const valorDoDesconto = (desconto / 100) * valorDoProduto;
    const valorComDesconto = valorDoProduto - valorDoDesconto;
    return `Valor original: R$ ${valorDoProduto}, Desconto aplicado: ${desconto}% e Valor final a pagar: R$ ${valorComDesconto}.`;
  }
}
