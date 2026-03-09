import { listarProdutos, registrarProduto } from "../src/gerenciarEstoque.js";
import assert from "node:assert";

describe("Testes do gerenciarEstoque", () => {
  it("quando listar produtos, deve retornar a lista dos produtos já cadastrados", () => {
    const resultadoEsperado = [
      "Produto: Arroz / Estoque: 50 / Preço: R$ 25.00",
      "Produto: Feijão / Estoque: 30 / Preço: R$ 8.50",
      "Produto: Macarrão / Estoque: 45 / Preço: R$ 4.20",
    ];

    const resultadoAtual = listarProdutos();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar produto, deve retornar o último produto registrado", () => {
    const resultadoEsperado = { nome: "Açúcar", quantidade: 20, preco: 7 };

    const resultadoAtual = registrarProduto({ nome: "Açúcar", quantidade: 20, preco: 7 });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
