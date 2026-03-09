import { calcularDescontoProgressivo } from "../../src/02_condicionais/calcularDescontoProgressivo.js";
import assert from "node:assert";

describe("Testes do calculacalcularDescontoProgressivorDesconto", () => {
  it("Quando informar valor do produto de R$ 0.01, deve retornar valor original de R$ 0.01, desconto aplicado de 0% e valor final a pagar de R$ 0.01.", () => {
    const valorDoProduto = calcularDescontoProgressivo(0.01);
    assert.equal(
      valorDoProduto,
      "Valor original: R$ 0.01, Desconto aplicado: 0% e Valor final a pagar: R$ 0.01.",
    );
  });
  it("Quando informar valor do produto de R$ 100, deve retornar valor original de R$ 100, desconto aplicado de 0% e valor final a pagar de R$ 100.", () => {
    const valorDoProduto = calcularDescontoProgressivo(100);
    assert.equal(
      valorDoProduto,
      "Valor original: R$ 100, Desconto aplicado: 0% e Valor final a pagar: R$ 100.",
    );
  });
  it("Quando informar valor do produto de R$ 100.01, deve retornar valor original de R$ 100.01, desconto aplicado de 10% e valor final a pagar de R$ 90.", () => {
    const valorDoProduto = calcularDescontoProgressivo(100.01);
    assert.equal(
      valorDoProduto,
      "Valor original: R$ 100.01, Desconto aplicado: 10% e Valor final a pagar: R$ 90.009.",
    );
  });
  it("Quando informar valor do produto de R$ 500, deve retornar valor original de R$ 500, desconto aplicado de 10% e valor final a pagar de R$ 450.", () => {
    const valorDoProduto = calcularDescontoProgressivo(500);
    assert.equal(
      valorDoProduto,
      "Valor original: R$ 500, Desconto aplicado: 10% e Valor final a pagar: R$ 450.",
    );
  });
  it("Quando informar valor do produto de R$ 500.01, deve retornar valor original de R$ 500.01, desconto aplicado de 20% e valor final a pagar de R$ 400.008.", () => {
    const valorDoProduto = calcularDescontoProgressivo(500.01);
    assert.equal(
      valorDoProduto,
      "Valor original: R$ 500.01, Desconto aplicado: 20% e Valor final a pagar: R$ 400.008.",
    );
  });
});
