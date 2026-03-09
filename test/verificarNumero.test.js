import { verificarNumero } from "../src/verificarNumero.js";
import assert from "node:assert";

describe("Testes do verificarNumero", () => {
  it("Quando enviar -1 deve retornar negativo", () => {
    const numero = verificarNumero(-1);
    assert.equal(numero, "-1 é um número negativo.");
  });
  it("Quando enviar 0 deve retornar zero", () => {
    const numero = verificarNumero(0);
    assert.equal(numero, "0 é igual a 0.");
  });
  it("Quando enviar 1 deve retornar positivo", () => {
    const numero = verificarNumero(1);
    assert.equal(numero, "1 é um número positivo.");
  });
});
