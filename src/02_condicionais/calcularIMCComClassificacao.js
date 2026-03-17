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
  [["pesoEmKilogramas", pesoEmKilogramas], ["alturaEmMetros", alturaEmMetros]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const imc = Math.round(Number(pesoEmKilogramas) / Number(alturaEmMetros) ** 2);
  if (imc < 18.5) return `O IMC é de ${imc}. Abaixo do peso.`;
  if (imc < 25) return `O IMC é de ${imc}. Peso normal.`;
  if (imc < 30) return `O IMC é de ${imc}. Sobrepeso.`;
  return `O IMC é de ${imc}. Obeso.`;
}
