import { calcularDivisaoDeConta } from "../../src/01-basicos/calcularDivisaoDeConta.js";
import assert from "node:assert";

describe("Testes do calcularDivisaoDeConta", () => {
  it("Quando informar 10 pessoas e valor de conta de R$ 100, deve retornar R$ 10 por pessoa", () => {
    const resultado = calcularDivisaoDeConta(100,10);
    const esperado = "Cada pessoa deve pagar R$ 10.";
    assert.equal(
      resultado,
      esperado,
    );
  });
  it("Quando enviar valor não numérico deve lançar erro", () => {
    assert.throws(() => calcularDivisaoDeConta('abc', 10), {
      message: /Parâmetro valorTotalConta inválido: não é um número/
    });
    assert.throws(() => calcularDivisaoDeConta(100, 'xyz'), {
      message: /Parâmetro quantidadeDePessoas inválido: não é um número/
    });
  });

  it("Quando enviar quantidade de pessoas igual a zero deve lançar erro de divisão por zero", () => {
    assert.throws(() => calcularDivisaoDeConta(100, 0), {
      message: /Parâmetro quantidadeDePessoas inválido: divisão por zero/
    });
  });
});
