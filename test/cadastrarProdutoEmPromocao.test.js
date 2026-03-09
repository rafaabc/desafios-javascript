import { cadastrarProdutoEmPromocao } from "../src/cadastrarProdutoEmPromocao.js";
import assert from "node:assert";

describe("Testes do cadastrarProdutoEmPromocao", () => {
  it("quando código de barras é duplicado, deve lançar um erro", () => {
    const produto1 = {
      codigoDeBarras: "123456789",
      nome: "Produto A",
      precoOriginal: 100,
      percentualDesconto: 20,
    };
    cadastrarProdutoEmPromocao(produto1);
    assert.throws(() => {
      cadastrarProdutoEmPromocao(produto1);
    }, /Código de barras já existe/);
  });
  it("quando preço original é menor ou igual a 0, deve lançar um erro", () => {
    const produto = {
      codigoDeBarras: "987654321",
      nome: "Produto B",
      precoOriginal: 0,
      percentualDesconto: 10,
    };
    assert.throws(() => {
      cadastrarProdutoEmPromocao(produto);
    }, /O preço original deve ser maior que 0/);
  });
  it("quando percentual de desconto é menor ou igual a 0, deve lançar um erro", () => {
    const produto = {
      codigoDeBarras: "1122334455",
      nome: "Produto C",
      precoOriginal: 100,
      percentualDesconto: 0,
    };
    assert.throws(() => {
      cadastrarProdutoEmPromocao(produto);
    }, /O percentual de desconto deve ser maior que 0 e menor ou igual a 90/);
  });
  it("quando percentual de desconto é maior que 90, deve lançar um erro", () => {
    const produto = {
      codigoDeBarras: "5566778899",
      nome: "Produto D",
      precoOriginal: 100,
      percentualDesconto: 91,
    };
    assert.throws(() => {
      cadastrarProdutoEmPromocao(produto);
    }, /O percentual de desconto deve ser maior que 0 e menor ou igual a 90/);
  });
  it("quando os dados são válidos, deve cadastrar o produto e retornar o último produto cadastrado", () => {
    const produto = {
      codigoDeBarras: "6677889900",
      nome: "Produto E",
      precoOriginal: 100,
      percentualDesconto: 20,
    };
    const ultimoProduto = cadastrarProdutoEmPromocao(produto);
    assert.deepStrictEqual(ultimoProduto, produto);
  });
});
