import { registrarPedido } from "../../src/03_listas/registrarPedidoRestaurante.js";
import assert from "node:assert";

describe("Testes do registrarPedido", () => {
  it("Quando pedido é duplicado, deve lançar um erro", () => {
    const pedido1 = {
      numeroPedido: 1,
      nomePrato: "Pizza",
      quantidade: 2,
      valorUnitario: 20,
    };
    registrarPedido(pedido1);
    assert.throws(() => {
      registrarPedido(pedido1);
    }, { message: /Número do pedido já existe./ });
  });
  it("Quando quantidade é inválida, deve lançar um erro", () => {
    const pedido2 = {
      numeroPedido: 2,
      nomePrato: "Hambúrguer",
      quantidade: 0,
      valorUnitario: 15,
    };
    assert.throws(() => {
      registrarPedido(pedido2);
    }, { message: /A quantidade deve ser maior ou igual a 1./ });
  });
  it("Quando valor unitário é inválido, deve lançar um erro", () => {
    const pedido3 = {
      numeroPedido: 3,
      nomePrato: "Salada",
      quantidade: 1,
      valorUnitario: 0,
    };
    assert.throws(() => {
      registrarPedido(pedido3);
    }, { message: /O valor unitário deve ser maior que 0./ });
  });
  it("Quando pedido é válido, deve retornar o último pedido registrado", () => {
    const pedido4 = {
      numeroPedido: 4,
      nomePrato: "Lasanha",
      quantidade: 2,
      valorUnitario: 25,
    };
    const ultimoPedido = registrarPedido(pedido4);
    const esperado = pedido4;
    assert.deepStrictEqual(ultimoPedido, esperado);
  });

  it("Quando valor unitario não for numérico, deve lançar erro", () => {
    assert.throws(() => {
      registrarPedido({ numeroPedido: 5, nomePrato: "X", quantidade: 1, valorUnitario: "vinte" });
    }, { message: /Parâmetro valorUnitario inválido: não é um número/ });
  });
});
