import { calcularIMCComClassificacao } from "../../src/02_condicionais/calcularIMCComClassificacao.js";
import assert from "node:assert";

describe("Testes do calcularIMCComClassificacao", () => {
  it("Quando informar peso de 56 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(56, 1.77);
    assert.equal(imc, "O IMC é de 18. Abaixo do peso.")
  });
  it("Quando informar peso de 70 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(70, 1.77);
    assert.equal(imc, "O IMC é de 22. Peso normal.")
  });
  it("Quando informar peso de 90 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(90, 1.77);
    assert.equal(imc, "O IMC é de 29. Sobrepeso.")
  });
  it("Quando informar peso de 120 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(120, 1.77);
    assert.equal(imc, "O IMC é de 38. Obeso.")
  });
});
