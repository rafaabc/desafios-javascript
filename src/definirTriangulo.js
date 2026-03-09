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
