import { calcularDivisaoDeConta } from "../../src/01-basicos/calcularDivisaoDeConta.js";
import assert from "node:assert";

describe("Testes do calcularDivisaoDeConta", () => {
  it("Quando informar 10 pessoas e valor de conta de R$ 100, deve retornar R$ 10 por pessoa", () => {
    const resultado = calcularDivisaoDeConta(100,10);
    assert.equal(resultado, "Cada pessoa deve pagar R$ 10.")
  });
});
