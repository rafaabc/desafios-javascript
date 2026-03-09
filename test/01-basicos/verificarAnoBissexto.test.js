import { verificarAnoBissexto } from "../../src/01-basicos/verificarAnoBissexto.js";
import assert from "node:assert";

describe("Testes do verificarAnoBissexto", () => {
  it("Quando enviar 2020 deve ser bissexto", () => {
    const resultado = verificarAnoBissexto(2020);
    assert.equal(resultado, "O ano 2020 é bissexto.");
  });
  it("Quando enviar 1900 não é bissexto", () => {
    const resultado = verificarAnoBissexto(1900);
    assert.equal(resultado, "O ano 1900 não é bissexto.");
  });
  it("Quando enviar 2019 não é bissexto", () => {
    const resultado = verificarAnoBissexto(2019);
    assert.equal(resultado, "O ano 2019 não é bissexto.");
  });
  it("Quando enviar 2000 é bissexto", () => {
    const resultado = verificarAnoBissexto(2000);
    assert.equal(resultado, "O ano 2000 é bissexto.");
  });
});
