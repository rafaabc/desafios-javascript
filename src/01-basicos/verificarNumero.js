/**
 * Desafio: Verificar sinal de um número
 *
 * Descrição:
 * Dado um número `n`, retorne uma string indicando se ele é negativo,
 * igual a zero ou positivo, nos formatos:
 * - "N é um número negativo."
 * - "N é igual a 0."
 * - "N é um número positivo."
 *
 * Regras:
 * - `n` é um número (inteiro ou ponto flutuante).
 * - Compare com 0 para determinar o sinal.
 * - Retornar exatamente as strings indicadas.
 */
export function verificarNumero(n) {
  if (n < 0) {
    return `${n} é um número negativo.`;
  } else if (n == 0) {
    return `${n} é igual a 0.`;
  } else {
    return `${n} é um número positivo.`;
  }
}
