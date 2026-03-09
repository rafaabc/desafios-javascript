export function calcularConsumoCombustivel(
  distanciaPercorridaEmKM,
  quantidadeCombustivelGastoEmL,
) {
  const resultadoConsumoCombustivel =
    distanciaPercorridaEmKM / quantidadeCombustivelGastoEmL;

  return `O consumo médio do veículo é de ${resultadoConsumoCombustivel} km/L.`;
}
