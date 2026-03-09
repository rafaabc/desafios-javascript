import { registrarContasAPagar } from "../../src/03_listas/registrarContasAPagar.js";
import assert from "node:assert";

describe("Testes do registrarContasAPagar", () => {
  it("quando número da conta é duplicado, deve lançar um erro", () => {
    const conta1 = {
      numeroConta: "001",
      descricao: "Conta de luz",
      valor: 100,
      dataVencimento: 10,
    };
    registrarContasAPagar(conta1);
    assert.throws(() => {
      registrarContasAPagar(conta1);
    }, /Número da conta já existe/);
  });
  it("quando valor é menor ou igual a 0, deve lançar um erro", () => {
    const conta = {
      numeroConta: "002",
      descricao: "Conta de água",
      valor: 0,
      dataVencimento: 15,
    };
    assert.throws(() => {
      registrarContasAPagar(conta);
    }, /O valor deve ser maior que 0/);
  });
  it("quando data de vencimento é inválida, deve lançar um erro", () => {
    const conta = {
      numeroConta: "003",
      descricao: "Conta de internet",
      valor: 100,
      dataVencimento: 32,
    };
    assert.throws(() => {
      registrarContasAPagar(conta);
    }, /A data de vencimento deve ser entre 1 e 31/);
  });
  it("quando os dados são válidos, deve registrar a conta e retornar o último registro", () => {
    const conta = {
      numeroConta: "004",
      descricao: "Conta de telefone",
      valor: 100,
      dataVencimento: 20,
    };
    const ultimoRegistro = registrarContasAPagar(conta);
    assert.deepStrictEqual(ultimoRegistro, conta);
  });
});
