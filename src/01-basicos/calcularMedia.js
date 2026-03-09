/**
 * Desafio: Calcular média de três números
 *
 * Descrição:
 * Dado três números (`n1`, `n2`, `n3`), calcule a média aritmética e
 * retorne a string no formato:
 * "O resultado da média de X, Y e Z é igual a M." onde M é a média.
 *
 * Regras:
 * - Os parâmetros são números (inteiros ou ponto flutuante).
 * - Calcule a média simples: (n1 + n2 + n3) / 3.
 * - Não altere o formato da string de saída.
 *
 * Entrada:
 * - `n1`, `n2`, `n3`: números
 *
 * Processamento:
 * - Calcular `(n1 + n2 + n3) / 3`.
 *
 * Saída:
 * - String: "O resultado da média de X, Y e Z é igual a M." (M = resultado)
 */
export function calcularMedia(n1, n2, n3) {
  const resultadoDaMedia = (n1 + n2 + n3) / 3;

  return `O resultado da média de ${n1}, ${n2} e ${n3} é igual a ${resultadoDaMedia}.`;
}
