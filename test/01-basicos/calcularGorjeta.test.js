import { calcularGorjeta } from "../../src/01-basicos/calcularGorjeta.js";
import assert from "node:assert";

describe("Testes do calcularGorjeta", () => {
  it("Quando informar valor total conta igual a 1000 e gorjeta igual a 10 deve retornar 100 de gorjeta e 1100 de valor final.", () => {
    const valorFinalDaConta = calcularGorjeta(1000, 10);
    const esperado = "Gorjeta: R$ 100 / Valor Final: R$ 1100.";
    assert.equal(
      valorFinalDaConta,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => calcularGorjeta('abc', 10), {
      message: /Parâmetro valorConta inválido: não é um número/
    });
    assert.throws(() => calcularGorjeta(100, 'xyz'), {
      message: /Parâmetro porcentagem inválido: não é um número/
    });
  });
});
