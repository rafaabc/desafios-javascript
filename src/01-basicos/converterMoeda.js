/**
 * Desafio: Converter moeda DKK para EUR
 *
 * Descrição:
 * Dado um valor em coroas dinamarquesas (DKK), converta para euros (EUR)
 * usando a taxa fixa 1 DKK = 0.13 EUR e retorne a string:
 * "X DKK equivalem a Y EUR.".
 *
 * Regras:
 * - `valorEmDKK` é um número (positivo ou zero).
 * - Use a taxa 0.13 para conversão.
 * - Retornar exatamente o formato de string especificado.
 */
export function converterDKKEUR(valorEmDKK) {
  const valorEmEUR = valorEmDKK * 0.13;

  return `${valorEmDKK} DKK equivalem a ${valorEmEUR} EUR.`;
}
