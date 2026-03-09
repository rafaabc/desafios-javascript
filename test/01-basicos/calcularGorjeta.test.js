import { calcularGorjeta } from "../../src/01-basicos/calcularGorjeta.js";
import assert from "node:assert";

describe("Testes do calcularGorjeta", () => {
  it("Quando informar valor total conta igual a 1000 e gorjeta igual a 10 deve retornar 100 de gorjeta e 1100 de valor final.", () => {
    const valorFinalDaConta = calcularGorjeta(1000, 10);
    assert.equal(valorFinalDaConta, "Gorjeta: R$ 100 / Valor Final: R$ 1100.");
  });
});
