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
  const resultadoConsumoCombustivel =
    distanciaPercorridaEmKM / quantidadeCombustivelGastoEmL;

  return `O consumo médio do veículo é de ${resultadoConsumoCombustivel} km/L.`;
}
