/**
 * Desafio: Calculadora de Média com Aprovação
 *
 * Descrição:
 * Calcula a média de três notas e retorna uma mensagem indicando aprovação,
 * recuperação ou reprovação conforme a média.
 *
 * Regras:
 * - Média >= 7: aprovado
 * - 5 <= Média < 7: recuperação
 * - Média < 5: reprovado
 *
 * Entrada:
 * - `n1`, `n2`, `n3`: números (notas)
 *
 * Processamento:
 * - Calcular média aritmética e comparar com os limites para decidir a situação.
 *
 * Saída:
 * - String com a média e a situação (aprovado/recuperação/reprovado).
 */
export function calcularMediaComAprovacao(n1, n2, n3) {
  [["n1", n1], ["n2", n2], ["n3", n3]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const media = (Number(n1) + Number(n2) + Number(n3)) / 3;
  if (media >= 7) return `Parabéns! Sua média é de ${media} e você foi aprovado!`;
  if (media >= 5) return `OK! Sua média é de ${media} e você está de recuperação. Ainda tem uma chance!`;
  return `Ishh! Sua média é de ${media} e você foi reprovado :(`;
}
