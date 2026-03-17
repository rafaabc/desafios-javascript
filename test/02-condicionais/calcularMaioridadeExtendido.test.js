import { calculoMaioridadeExtendido } from "../../src/02_condicionais/calcularMaioridadeExtendido.js";
import assert from "node:assert";

describe("Testes do calculoMaioridadeExtendido", () => {
  it("Quando idade é igual a 0 retornar criança", () => {
    const idade = calculoMaioridadeExtendido(0);
    assert.equal(idade, "Sua idade é 0. Você é criança.");
  });
  it("Quando idade é igual a 1 retornar criança", () => {
    const idade = calculoMaioridadeExtendido(1);
    assert.equal(idade, "Sua idade é 1. Você é criança.");
  });
  it("Quando idade é igual a 12 retornar criança", () => {
    const idade = calculoMaioridadeExtendido(12);
    assert.equal(idade, "Sua idade é 12. Você é criança.");
  });
  it("Quando idade é igual a 13 retornar adolescente", () => {
    const idade = calculoMaioridadeExtendido(13);
    assert.equal(idade, "Sua idade é 13. Você é adolescente.");
  });
  it("Quando idade é igual a 17 retornar adolescente", () => {
    const idade = calculoMaioridadeExtendido(17);
    assert.equal(idade, "Sua idade é 17. Você é adolescente.");
  });
  it("Quando idade é igual a 18 retornar adulto", () => {
    const idade = calculoMaioridadeExtendido(18);
    assert.equal(idade, "Sua idade é 18. Você é adulto.");
  });
  it("Quando idade é igual a 59 retornar adulto", () => {
    const idade = calculoMaioridadeExtendido(59);
    assert.equal(idade, "Sua idade é 59. Você é adulto.");
  });
  it("Quando idade é igual a 60 retornar idoso", () => {
    const idade = calculoMaioridadeExtendido(60);
    const esperado = "Sua idade é 60. Você é idoso.";
    assert.equal(
      idade,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => calculoMaioridadeExtendido('x'), {
      message: /Parâmetro .* inválido: não é um número/
    });
  });

  it("Quando enviar idade negativa que não se encaixe em nenhuma faixa, deve retornar undefined", () => {
    const resultado = calculoMaioridadeExtendido(-5);
    assert.equal(resultado, undefined);
  });
});
