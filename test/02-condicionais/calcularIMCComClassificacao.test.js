import { calcularIMCComClassificacao } from "../../src/02_condicionais/calcularIMCComClassificacao.js";
import assert from "node:assert";

describe("Testes do calcularIMCComClassificacao", () => {
  it("Quando informar peso de 56 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(56, 1.77);
    const esperado = "O IMC é de 18. Abaixo do peso.";
    assert.equal(
      imc,
      esperado,
    );
  });
  it("Quando informar peso de 70 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(70, 1.77);
    const esperado2 = "O IMC é de 22. Peso normal.";
    assert.equal(
      imc,
      esperado2,
    );
  });
  it("Quando informar peso de 90 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(90, 1.77);
    const esperado3 = "O IMC é de 29. Sobrepeso.";
    assert.equal(
      imc,
      esperado3,
    );
  });
  it("Quando informar peso de 120 kg e altura de 1.77 m, deve retornar x", () => {
    const imc = calcularIMCComClassificacao(120, 1.77);
    const esperado4 = "O IMC é de 38. Obeso.";
    assert.equal(
      imc,
      esperado4,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => calcularIMCComClassificacao('a', 1.7), {
      message: /Parâmetro .* inválido: não é um número/
    });
  });
});
