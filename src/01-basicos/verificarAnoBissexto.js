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
  [["ano", ano]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const anoNum = Number(ano);
  const divisivelPor4 = anoNum % 4 == 0;
  const divisivelPor100 = anoNum % 100 == 0;
  const divisivelPor400 = anoNum % 400 == 0;

  if (divisivelPor400) return `O ano ${anoNum} é bissexto.`;
  if (divisivelPor100) return `O ano ${anoNum} não é bissexto.`;
  if (divisivelPor4) return `O ano ${anoNum} é bissexto.`;
  return `O ano ${anoNum} não é bissexto.`;
}
