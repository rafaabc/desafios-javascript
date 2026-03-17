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
  [["n", n]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const numero = Number(n);
  if (numero < 0) return `${numero} é um número negativo.`;
  if (numero == 0) return `${numero} é igual a 0.`;
  return `${numero} é um número positivo.`;
}
