import { calcularConsumoCombustivel } from "../../src/01-basicos/calcularConsumoCombustivel.js";
import assert from "node:assert";

describe("Testes do calcularConsumoCombustivel", () => {
  it("Quando enviar 100 km e 10 l deve retornar consumo médio de 10", () => {
    const consumo = calcularConsumoCombustivel(100, 10);
    const esperado = "O consumo médio do veículo é de 10 km/L.";
    assert.equal(
      consumo,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => calcularConsumoCombustivel('abc', 10), {
      message: /Parâmetro distanciaPercorridaEmKM inválido: não é um número/
    });
    assert.throws(() => calcularConsumoCombustivel(100, 'xyz'), {
      message: /Parâmetro quantidadeCombustivelGastoEmL inválido: não é um número/
    });
  });

  it("Quando enviar quantidade de combustível igual a zero deve lançar erro de divisão por zero", () => {
    assert.throws(() => calcularConsumoCombustivel(100, 0), {
      message: /Parâmetro quantidadeCombustivelGastoEmL inválido: divisão por zero/
    });
  });
});
