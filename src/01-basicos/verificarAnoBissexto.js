/**
 * Desafio: Verificar ano bissexto
 *
 * Descrição:
 * Dado um ano, determine se ele é bissexto e retorne "O ano ANO é bissexto."
 * ou "O ano ANO não é bissexto." conforme o caso.
 *
 * Regras:
 * - Um ano é bissexto se for divisível por 400, ou se for divisível por 4
 *   e não for divisível por 100.
 * - `ano` é um número inteiro.
 * - Retornar exatamente as strings especificadas.
 */
export function verificarAnoBissexto(ano) {
  const divisivelPor4 = ano % 4 == 0;
  const divisivelPor100 = ano % 100 == 0;
  const divisivelPor400 = ano % 400 == 0;

  if (divisivelPor400) {
    return `O ano ${ano} é bissexto.`;
  } else if (divisivelPor100) {
    return `O ano ${ano} não é bissexto.`;
  } else if (divisivelPor4) {
    return `O ano ${ano} é bissexto.`;
  } else {
    return `O ano ${ano} não é bissexto.`;
  }
}
