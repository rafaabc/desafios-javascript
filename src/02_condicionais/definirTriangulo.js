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
export function definirTriangulo(a, b, c) {
  const somaBC = b + c;
  const somaAC = a + c;
  const somaAB = a + b;
  const viabilidadeTriangulo = a < somaBC && b < somaAC && c < somaAB;

  if (viabilidadeTriangulo) {
    return `As medidas ${a}, ${b} e ${c} formam um triângulo.`;
  } else {
    return `As medidas ${a}, ${b} e ${c} não formam um triângulo.`;
  }
}
