import { calcularMedia } from "../../src/01-basicos/calcularMedia.js";
import assert from "node:assert";

describe("Testes do calcularMedia", () => {
  it("Quando informar 1, 2 e 3 deve retornar média de 2", () => {
    const media = calcularMedia(1, 2, 3);
    const esperado = "O resultado da média de 1, 2 e 3 é igual a 2.";
    assert.equal(
      media,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => calcularMedia('a', 2, 3), {
      message: /Parâmetro .* inválido: não é um número/
    });
  });
});
