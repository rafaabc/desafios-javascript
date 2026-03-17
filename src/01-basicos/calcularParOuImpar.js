/**
 * Desafio: Verificar se um número é par ou ímpar
 *
 * Descrição:
 * Dado um número, retorne uma string indicando se ele é par ou ímpar,
 * no formato: "O número N é par." ou "O número N é ímpar.".
 *
 * Regras:
 * - `numero` é um número inteiro.
 * - Use operação de módulo para determinar a paridade.
 * - Retornar exatamente o formato de mensagem especificado.
 */
export function calcularParOuImpar(numero) {
  if (Number.isNaN(Number(numero))) throw new Error('Parâmetro numero inválido: não é um número');

  const valor = Number(numero);
  return valor % 2 == 0 ? `O número ${valor} é par.` : `O número ${valor} é ímpar.`;
}
