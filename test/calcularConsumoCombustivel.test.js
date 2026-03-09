import { calcularConsumoCombustivel } from "../src/calcularConsumoCombustivel.js";
import assert from "node:assert";

describe("Testes do calcularConsumoCombustivel", () => {
  it("Quando enviar 100 km e 10 l deve retornar consumo médio de 10", () => {
    const consumo = calcularConsumoCombustivel(100, 10);
    assert.equal(consumo, "O consumo médio do veículo é de 10 km/L.");
  });
});
