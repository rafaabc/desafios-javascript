import { calcularIngresso } from "../src/calcularIngresso.js";
import assert from "node:assert";

describe("Testes do calcularIngresso", () => {
  it("Quando enviar idade 0 deve retornar a idade e ingresso gratuito", () => {
    const idade = calcularIngresso(0);
    assert.equal(idade, "Você tem 0 anos. O ingresso é gratuito.");
  });
  it("Quando enviar idade 1 deve retornar a idade e ingresso gratuito", () => {
    const idade = calcularIngresso(1);
    assert.equal(idade, "Você tem 1 anos. O ingresso é gratuito.");
  });
  it("Quando enviar idade 5 deve retornar a idade e ingresso gratuito", () => {
    const idade = calcularIngresso(5);
    assert.equal(idade, "Você tem 5 anos. O ingresso é gratuito.");
  });
  it("Quando enviar idade 6 deve retornar a idade e ingresso a R$ 15", () => {
    const idade = calcularIngresso(6);
    assert.equal(idade, "Você tem 6 anos. O valor do ingresso é de R$ 15.");
  });
  it("Quando enviar idade 7 deve retornar a idade e ingresso a R$ 15", () => {
    const idade = calcularIngresso(7);
    assert.equal(idade, "Você tem 7 anos. O valor do ingresso é de R$ 15.");
  });
  it("Quando enviar idade 12 deve retornar a idade e ingresso a R$ 15", () => {
    const idade = calcularIngresso(12);
    assert.equal(idade, "Você tem 12 anos. O valor do ingresso é de R$ 15.");
  });
  it("Quando enviar idade 13 deve retornar a idade e ingresso a R$ 30", () => {
    const idade = calcularIngresso(13);
    assert.equal(idade, "Você tem 13 anos. O valor do ingresso é de R$ 30.");
  });
  it("Quando enviar idade 59 deve retornar a idade e ingresso a R$ 30", () => {
    const idade = calcularIngresso(59);
    assert.equal(idade, "Você tem 59 anos. O valor do ingresso é de R$ 30.");
  });
  it("Quando enviar idade 60 deve retornar a idade e ingresso a R$ 15", () => {
    const idade = calcularIngresso(60);
    assert.equal(idade, "Você tem 60 anos. O valor do ingresso é de R$ 15.");
  });
  it("Quando enviar idade 61 deve retornar a idade e ingresso a R$ 15", () => {
    const idade = calcularIngresso(61);
    assert.equal(idade, "Você tem 61 anos. O valor do ingresso é de R$ 15.");
  });
});
