/**
 * Desafio: Calcular consumo de combustível
 *
 * Descrição:
 * Dada a distância percorrida em quilômetros e a quantidade de combustível
 * gasta em litros, calcule o consumo médio em km/L e retorne a string:
 * "O consumo médio do veículo é de X km/L.".
 *
 * Regras:
 * - `distanciaPercorridaEmKM` e `quantidadeCombustivelGastoEmL` são números.
 * - Não dividir por zero (assume-se valor positivo para o consumo).
 * - Retornar exatamente a string no formato especificado.
 *
 * Entrada:
 * - `distanciaPercorridaEmKM`: número (km)
 * - `quantidadeCombustivelGastoEmL`: número (L)
 *
 * Processamento:
 * - Calcular `distanciaPercorridaEmKM / quantidadeCombustivelGastoEmL`.
 *
 * Saída:
 * - String: "O consumo médio do veículo é de X km/L." (X = resultado numérico)
 */
export function calcularConsumoCombustivel(
  distanciaPercorridaEmKM,
  quantidadeCombustivelGastoEmL,
) {
  [["distanciaPercorridaEmKM", distanciaPercorridaEmKM], ["quantidadeCombustivelGastoEmL", quantidadeCombustivelGastoEmL]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  if (Number(quantidadeCombustivelGastoEmL) === 0) throw new Error('Parâmetro quantidadeCombustivelGastoEmL inválido: divisão por zero');

  const consumoMedio = Number(distanciaPercorridaEmKM) / Number(quantidadeCombustivelGastoEmL);

  return `O consumo médio do veículo é de ${consumoMedio} km/L.`;
}
