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
  [["valorTotalConta", valorTotalConta], ["quantidadeDePessoas", quantidadeDePessoas]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  if (Number(quantidadeDePessoas) === 0) throw new Error('Parâmetro quantidadeDePessoas inválido: divisão por zero');

  const resultado = Number(valorTotalConta) / Number(quantidadeDePessoas);

  return `Cada pessoa deve pagar R$ ${resultado}.`;
}
