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
  const resultadoDaMedia = (n1 + n2 + n3) / 3;

  if (resultadoDaMedia >= 7) {
    return `Parabéns! Sua média é de ${resultadoDaMedia} e você foi aprovado!`;
  } else if (resultadoDaMedia >= 5 && resultadoDaMedia < 7) {
    return `OK! Sua média é de ${resultadoDaMedia} e você está de recuperação. Ainda tem uma chance!`;
  } else {
    return `Ishh! Sua média é de ${resultadoDaMedia} e você foi reprovado :(`;
  }
}
