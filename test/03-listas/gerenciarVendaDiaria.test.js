import { listarVendas, registrarVenda } from "../../src/03_listas/gerenciarVendaDiaria.js";
import assert from "node:assert";

describe("Testes do gerenciarVendaDiaria", () => {
  it("quando listar vendas, deve retornar a lista das vendas já cadastradas", () => {
    const resultadoAtual = listarVendas();
    const esperado = [
      "Venda 1: R$ 150.00",
      "Venda 2: R$ 85.50",
      "Venda 3: R$ 220.00",
      "Venda 4: R$ 95.00",
    ];

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar venda, deve retornar a última venda registrada", () => {
    const resultadoAtual = registrarVenda({ numero: 5, valor: 60 });
    const esperado = { numero: 5, valor: 60 };

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar venda com valor inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarVenda({ numero: 6, valor: "sessenta" });
    }, { message: /Parâmetro valor inválido: não é um número/ });
  });
});
