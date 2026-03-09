/*
Desafio: Verificador de Triângulo
Entradas: três valores representando lados a, b, c
Processamento: verificar se cada lado é menor que a soma dos outros dois
Saída: string informando se é possível formar um triângulo
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
