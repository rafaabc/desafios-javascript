import { verificarNumero } from "../../src/01-basicos/verificarNumero.js";
import assert from "node:assert";

describe("Testes do verificarNumero", () => {
  it("Quando enviar -3 deve retornar negativo", () => {
    const resultado = verificarNumero(-3);
    assert.equal(resultado, "-3 é um número negativo.");
  });
  it("Quando enviar 0 deve retornar igual a 0", () => {
    const resultado = verificarNumero(0);
    assert.equal(resultado, "0 é igual a 0.");
  });
  it("Quando enviar 7 deve retornar positivo", () => {
    const resultado = verificarNumero(7);
    const esperado = "7 é um número positivo.";
    assert.equal(
      resultado,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => verificarNumero('x'), {
      message: /Parâmetro .* inválido: não é um número/
    });
  });
});
