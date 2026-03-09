/**
 * Desafio: Calculadora de IMC com Classificação
 *
 * Descrição:
 * Calcula o IMC a partir do peso e altura e classifica o resultado em
 * faixas (abaixo do peso, peso normal, sobrepeso, obeso), retornando texto
 * com o IMC e a classificação.
 *
 * Regras:
 * - IMC = peso / (altura ** 2), arredondado com `Math.round`.
 * - Classificações baseadas nos limites 18.5, 25 e 30.
 *
 * Entrada:
 * - `pesoEmKilogramas`: número (kg)
 * - `alturaEmMetros`: número (m)
 *
 * Processamento:
 * - Calcular IMC e comparar com os limites para escolher a classificação.
 *
 * Saída:
 * - String: "O IMC é de X. <Classificação>."
 */
export function calcularIMCComClassificacao(pesoEmKilogramas, alturaEmMetros) {
  const resultadoIMC = Math.round(pesoEmKilogramas / alturaEmMetros ** 2);

  if (resultadoIMC < 18.5) {
    return `O IMC é de ${resultadoIMC}. Abaixo do peso.`;
  } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
    return `O IMC é de ${resultadoIMC}. Peso normal.`;
  } else if (resultadoIMC >= 25 && resultadoIMC < 30) {
    return `O IMC é de ${resultadoIMC}. Sobrepeso.`;
  } else {
    return `O IMC é de ${resultadoIMC}. Obeso.`;
  }
}
