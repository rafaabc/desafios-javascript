import { listarProdutos, registrarProduto } from "../../src/03_listas/gerenciarEstoque.js";
import assert from "node:assert";

describe("Testes do gerenciarEstoque", () => {
  it("quando listar produtos, deve retornar a lista dos produtos já cadastrados", () => {
    const resultadoAtual = listarProdutos();
    const esperado = [
      "Produto: Arroz / Estoque: 50 / Preço: R$ 25.00",
      "Produto: Feijão / Estoque: 30 / Preço: R$ 8.50",
      "Produto: Macarrão / Estoque: 45 / Preço: R$ 4.20",
    ];

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar produto, deve retornar o último produto registrado", () => {
    const resultadoAtual = registrarProduto({ nome: "Açúcar", quantidade: 20, preco: 7 });
    const esperado = { nome: "Açúcar", quantidade: 20, preco: 7 };

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar produto com quantidade inválida (não numérica), deve lançar erro", () => {
    assert.throws(() => {
      registrarProduto({ nome: "Sal", quantidade: "vinte", preco: 3 });
    }, { message: /Parâmetro quantidade inválido: não é um número/ });
  });

  it("quando registrar produto com preco inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarProduto({ nome: "Sal", quantidade: 10, preco: "tres" });
    }, { message: /Parâmetro preco inválido: não é um número/ });
  });
});
