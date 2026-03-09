import { listarVendas, registrarVenda } from "../../src/03_listas/gerenciarVendaDiaria.js";
import assert from "node:assert";

describe("Testes do gerenciarVendaDiaria", () => {
  it("quando listar vendas, deve retornar a lista das vendas já cadastradas", () => {
    const resultadoEsperado = [
      "Venda 1: R$ 150.00",
      "Venda 2: R$ 85.50",
      "Venda 3: R$ 220.00",
      "Venda 4: R$ 95.00",
    ];

    const resultadoAtual = listarVendas();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar venda, deve retornar a última venda registrada", () => {
    const resultadoEsperado = { numero: 5, valor: 60 };

    const resultadoAtual = registrarVenda({ numero: 5, valor: 60 });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
