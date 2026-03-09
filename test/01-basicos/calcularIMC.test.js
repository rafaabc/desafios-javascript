import { calcularIMC } from "../../src/01-basicos/calcularIMC.js";
import assert from "node:assert";

describe("Testes do calcularIMC", () => {
  it("Quando informar altura e peso deve retornar o IMC", () => {
    const imc = calcularIMC(94, 1.77);
    assert.equal(imc, "O IMC é de 30.");
  });
});
