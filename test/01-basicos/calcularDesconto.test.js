import { calcularDesconto } from "../../src/01-basicos/calcularDesconto.js";
import assert from "node:assert";

describe("Testes do calcularDesconto", () => {
  it("Quando informar valor do produto de R$ 100 e porcentagem de desconto de 10% deve retornar valor a pagar de R$ 90", () => {
    const desconto = calcularDesconto(100, 10);
    assert.equal(
      desconto,
      "O valor do desconto é de R$ 10 e o preço final a pagar é de R$ 90.",
    );
  });
});
