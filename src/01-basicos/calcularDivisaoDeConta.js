/**
 * Desafio: Dividir conta entre pessoas
 *
 * Descrição:
 * Dado o valor total da conta e a quantidade de pessoas, calcule quanto cada
 * pessoa deve pagar e retorne a string: "Cada pessoa deve pagar R$ X.".
 *
 * Regras:
 * - `valorTotalConta` e `quantidadeDePessoas` são números (quantidade positiva).
 * - Divisão simples: valorTotalConta / quantidadeDePessoas.
 * - Retornar exatamente a string indicada.
 *
 * Entrada:
 * - `valorTotalConta`: número (R$)
 * - `quantidadeDePessoas`: número (>0)
 *
 * Processamento:
 * - Calcular `valorTotalConta / quantidadeDePessoas`.
 *
 * Saída:
 * - String: "Cada pessoa deve pagar R$ X." (X = resultado numérico)
 */
export function calcularDivisaoDeConta(valorTotalConta, quantidadeDePessoas) {
  const resultado = valorTotalConta / quantidadeDePessoas;

  return `Cada pessoa deve pagar R$ ${resultado}.`;
}
