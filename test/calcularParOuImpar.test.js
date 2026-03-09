import { calcularParOuImpar } from "../src/calcularParOuImpar.js";
import assert from "node:assert";

describe("Testes do calcularParOuImpar", () => {
  it("Quando informar 256 deve retornar par", () => {
    const numero = calcularParOuImpar(256);
    assert.equal(numero, "O número 256 é par.");
  });
  it("Quando informar 1001 deve retornar ímpar", () => {
    const numero = calcularParOuImpar(1001);
    assert.equal(numero, "O número 1001 é ímpar.");
  });
});
