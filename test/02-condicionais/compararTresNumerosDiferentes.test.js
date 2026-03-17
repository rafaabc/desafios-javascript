import { compararTresNumerosDiferentes } from "../../src/02_condicionais/compararTresNumerosDiferentes.js";
import assert from "node:assert";

describe("Testes do compararTresNumerosDiferentes", () => {
  it("Quando enviar 3, 2 e 1 deve retornar na ordem 3, 2 e 1", () => {
    const numeros = compararTresNumerosDiferentes(3, 2, 1);
    assert.equal(numeros, "Maior: 3, Meio: 2, Menor: 1.");
  });
  it("Quando enviar 3, 1 e 2 deve retornar na ordem 3, 2 e 1", () => {
    const numeros = compararTresNumerosDiferentes(3, 1, 2);
    assert.equal(numeros, "Maior: 3, Meio: 2, Menor: 1.");
  });
  it("Quando enviar 1, 3 e 2 deve retornar na ordem 3, 2 e 1", () => {
    const numeros = compararTresNumerosDiferentes(1, 3, 2);
    assert.equal(numeros, "Maior: 3, Meio: 2, Menor: 1.");
  });
  it("Quando enviar 2, 3 e 1 deve retornar na ordem 3, 2 e 1", () => {
    const numeros = compararTresNumerosDiferentes(2, 3, 1);
    assert.equal(numeros, "Maior: 3, Meio: 2, Menor: 1.");
  });
  it("Quando enviar 1, 2 e 3 deve retornar na ordem 3, 2 e 1", () => {
    const numeros = compararTresNumerosDiferentes(1, 2, 3);
    assert.equal(numeros, "Maior: 3, Meio: 2, Menor: 1.");
  });
  it("Quando enviar 2, 1 e 3 deve retornar na ordem 3, 2 e 1", () => {
    const numeros = compararTresNumerosDiferentes(2, 1, 3);
    const esperado = "Maior: 3, Meio: 2, Menor: 1.";
    assert.equal(
      numeros,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => compararTresNumerosDiferentes('a', 2, 3), {
      message: /Parâmetro .* inválido: não é um número/
    });
  });

  it("Quando enviar números duplicados deve lançar erro", () => {
    assert.throws(() => compararTresNumerosDiferentes(1, 1, 2), {
      message: /Os números devem ser diferentes entre si/
    });
  });
});
