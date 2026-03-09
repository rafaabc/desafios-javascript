import { listarPedidos, registrarPedido } from "../src/gerenciarRegistroDePedidos.js";
import assert from "node:assert";

describe("Testes do gerenciarRegistroDePedidos", () => {
  it("quando listar pedidos, deve retornar a lista dos pedidos já cadastrados", () => {
    const resultadoEsperado = [
      "Pedido 101: Pizza / Quantidade: 2 / Valor unitário: R$ 45.00 / Total: R$ 90.00",
      "Pedido 102: Hambúrguer / Quantidade: 1 / Valor unitário: R$ 28.00 / Total: R$ 28.00",
      "Pedido 103: Refrigerante / Quantidade: 3 / Valor unitário: R$ 6.00 / Total: R$ 18.00",
    ];

    const resultadoAtual = listarPedidos();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar pedido, deve retornar o último pedido registrado", () => {
    const resultadoEsperado = { numero: 104, item: "Wrap", quantidade: 2, valorUnitario: 12 };

    const resultadoAtual = registrarPedido({ numero: 104, item: "Wrap", quantidade: 2, valorUnitario: 12 });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
