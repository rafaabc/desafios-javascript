import { verificarAnoBissexto } from "../src/verificarAnoBissexto.js";
import assert from "node:assert";

describe("Testes do verificarAnoBissexto", () => {
  it("Quando enviar 1900 deve retornar que náo é ano bissexto", () => {
    const ano = verificarAnoBissexto(1900);
    assert.equal(ano, "O ano 1900 não é bissexto.");
  });

  it("Quando enviar 2000 deve retornar que é ano bissexto", () => {
    const ano = verificarAnoBissexto(2000);
    assert.equal(ano, "O ano 2000 é bissexto.");
  });
  it("Quando enviar 2001 deve retornar que náo é ano bissexto", () => {
    const ano = verificarAnoBissexto(2001);
    assert.equal(ano, "O ano 2001 não é bissexto.");
  });
  it("Quando enviar 2004 deve retornar que é ano bissexto", () => {
    const ano = verificarAnoBissexto(2004);
    assert.equal(ano, "O ano 2004 é bissexto.");
  });
  it("Quando enviar 2028 deve retornar que é ano bissexto", () => {
    const ano = verificarAnoBissexto(2028);
    assert.equal(ano, "O ano 2028 é bissexto.");
  });
});
