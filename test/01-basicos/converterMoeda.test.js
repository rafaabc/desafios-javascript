import { converterDKKEUR } from "../../src/01-basicos/converterMoeda.js";
import assert from "node:assert";

describe("Testes do conversorDKKEUR", () => {
  it("Quando informar 100 DKK, deve retornar 13 EUR", () => {
    const conversorDKK = converterDKKEUR(100);
    const esperado = "100 DKK equivalem a 13 EUR.";
    assert.equal(
      conversorDKK,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => converterDKKEUR('abc'), {
      message: /Parâmetro .* inválido: não é um número/
    });
  });
});
