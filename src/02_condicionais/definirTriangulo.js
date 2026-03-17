/**
 * Desafio: Verificador de Triângulo
 *
 * Descrição:
 * Verifica se três medidas podem formar um triângulo, usando a propriedade
 * de que cada lado deve ser menor que a soma dos outros dois.
 *
 * Regras:
 * - Para formar triângulo, `a < b + c && b < a + c && c < a + b`.
 *
 * Entrada:
 * - `a`, `b`, `c`: números (medidas dos lados)
 *
 * Processamento:
 * - Calcular somas e verificar a condição de viabilidade.
 *
 * Saída:
 * - String informando se as medidas formam ou não um triângulo.
 */
export function definirTriangulo(sideA, sideB, sideC) {
  [["sideA", sideA], ["sideB", sideB], ["sideC", sideC]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const a = Number(sideA);
  const b = Number(sideB);
  const c = Number(sideC);
  const viabilidadeTriangulo = a < b + c && b < a + c && c < a + b;
  return viabilidadeTriangulo
    ? `As medidas ${sideA}, ${sideB} e ${sideC} formam um triângulo.`
    : `As medidas ${sideA}, ${sideB} e ${sideC} não formam um triângulo.`;
}
