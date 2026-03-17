import { calcularIMC } from "../../src/01-basicos/calcularIMC.js";
import assert from "node:assert";

describe("Testes do calcularIMC", () => {
  it("Quando informar altura e peso deve retornar o IMC", () => {
    const imc = calcularIMC(94, 1.77);
    const esperado = "O IMC é de 30.";
    assert.equal(
      imc,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => calcularIMC('abc', 1.7), {
      message: /Parâmetro pesoEmKilogramas inválido: não é um número/
    });
    assert.throws(() => calcularIMC(70, 'xyz'), {
      message: /Parâmetro alturaEmMetros inválido: não é um número/
    });
  });
});
