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
  const restoDaDivisao = numero % 2;

  if (restoDaDivisao == 0) {
    return `O número ${numero} é par.`;
  } else {
    return `O número ${numero} é ímpar.`;
  }
}
