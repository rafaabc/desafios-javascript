import { definirTriangulo } from "../../src/02_condicionais/definirTriangulo.js";
import assert from "node:assert";

describe("Testes do definirTriangulo", () => {
  it("Quando enviar 1, 1 e 1 deve retornar viabilidade do triângulo", () => {
    const medidas = definirTriangulo(1, 1, 1);
    assert.equal(medidas, "As medidas 1, 1 e 1 formam um triângulo.");
  });
  it("Quando enviar 1, 2 e 3 deve retornar inviabilidade do triângulo", () => {
    const medidas = definirTriangulo(1, 2, 3);
    assert.equal(medidas, "As medidas 1, 2 e 3 não formam um triângulo.");
  });
  it("Quando enviar 2, 3 e 5 deve retornar inviabilidade do triângulo", () => {
    const medidas = definirTriangulo(2, 3, 5);
    assert.equal(medidas, "As medidas 2, 3 e 5 não formam um triângulo.");
  });
});
