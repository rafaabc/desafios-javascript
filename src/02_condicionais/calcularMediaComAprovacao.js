/*
Desafio: Calculadora de Média com Aprovação
Entradas: três notas
Processamento: calcular média e classificar (>=7 aprovado, >=5 e <7 recuperação, <5 reprovado)
Saída: string com média e situação
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
