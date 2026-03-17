/**
 * Desafio: Calcular IMC (Índice de Massa Corporal)
 *
 * Descrição:
 * Dado o peso em quilogramas e a altura em metros, calcule o IMC e retorne
 * a string "O IMC é de X." onde X é o IMC arredondado ao inteiro mais próximo.
 *
 * Regras:
 * - `pesoEmKilogramas` e `alturaEmMetros` são números positivos.
 * - O IMC deve ser calculado como peso / (altura ** 2) e arredondado com
 *   `Math.round`.
 * - Retornar exatamente a string especificada.
 *
 * Entrada:
 * - `pesoEmKilogramas`: número (kg)
 * - `alturaEmMetros`: número (m)
 *
 * Processamento:
 * - Calcular `pesoEmKilogramas / (alturaEmMetros ** 2)` e aplicar `Math.round`.
 *
 * Saída:
 * - String: "O IMC é de X." onde X é o IMC arredondado
 */
export function calcularIMC(pesoEmKilogramas, alturaEmMetros) {
  [["pesoEmKilogramas", pesoEmKilogramas], ["alturaEmMetros", alturaEmMetros]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const imc = Math.round(Number(pesoEmKilogramas) / Number(alturaEmMetros) ** 2);

  return `O IMC é de ${imc}.`;
}
