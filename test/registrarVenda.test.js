import { registrarVenda } from "../src/registrarVenda.js";
import assert from "node:assert";

describe("Testes do registrarVenda", () => {
  it("Quando número de venda se repetir, deve lançar erro", () => {
    const vendaComDadosValidos = {
      numeroDaVenda: 1,
      nomeDoCliente: "teste",
      valorDaVenda: 0.01,
      formaDePagamento: "PIX",
    };
    assert.throws(
      () => {
        registrarVenda(vendaComDadosValidos);
        registrarVenda(vendaComDadosValidos);
      },
      {
        name: "Error",
        message: "O número da venda não pode se repetir",
      },
    );
  });
  it("Quando valor de venda igual a zero, deve lançar erro", () => {
    const vendaComValorZerado = {
      numeroDaVenda: 2,
      nomeDoCliente: "teste",
      valorDaVenda: 0,
      formaDePagamento: "PIX",
    };
    assert.throws(
      () => {
        registrarVenda(vendaComValorZerado);
      },
      {
        name: "Error",
        message: "O valor deve ser maior que 0",
      },
    );
  });
  it("Quando forma de pagamento diferente de dinheir, débito, crédito ou pix, deve lançar erro", () => {
    const vendaComformaDePagamentoInvalido = {
      numeroDaVenda: 3,
      nomeDoCliente: "teste",
      valorDaVenda: 0.01,
      formaDePagamento: "fiado",
    };
    assert.throws(
      () => {
        registrarVenda(vendaComformaDePagamentoInvalido);
      },
      {
        name: "Error",
        message:
          "A forma de pagamento deve ser: Dinheiro, Débito, Crédito ou PIX",
      },
    );
  });
  it("Quando enviar venda com dados válidos, deve retornar a última venda", () => {
    const vendaComDadosValidos = {
      numeroDaVenda: 4,
      nomeDoCliente: "teste",
      valorDaVenda: 0.01,
      formaDePagamento: "PIX",
    };
    const vendaRegistrada = registrarVenda(vendaComDadosValidos);
    assert.deepEqual(vendaRegistrada, {
      numeroDaVenda: 4,
      nomeDoCliente: "teste",
      valorDaVenda: 0.01,
      formaDePagamento: "PIX",
    });
  });
});
