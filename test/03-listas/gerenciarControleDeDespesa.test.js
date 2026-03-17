import { listarDespesas, registrarDespesa } from "../../src/03_listas/gerenciarControleDeDespesa.js";
import assert from "node:assert";

describe("Testes do gerenciarControleDeDespesa", () => {
  it("quando listar despesas, deve retornar a lista das despesas já cadastradas", () => {
    const resultadoAtual = listarDespesas();
    const esperado = [
      "Despesa: Aluguel / Valor: R$ 1200.00 / Categoria: Moradia",
      "Despesa: Mercado / Valor: R$ 450.00 / Categoria: Alimentação",
      "Despesa: Internet / Valor: R$ 100.00 / Categoria: Serviços",
      "Despesa: Restaurante / Valor: R$ 250.00 / Categoria: Alimentação",
    ];

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar despesa, deve retornar a última despesa registrada", () => {
    const resultadoAtual = registrarDespesa({
      descricao: "Transporte",
      valor: 30,
      categoria: "Transporte",
    });
    const esperado = { descricao: "Transporte", valor: 30, categoria: "Transporte" };

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar despesa com valor inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarDespesa({ descricao: "X", valor: "trinta", categoria: "Transporte" });
    }, { message: /Parâmetro valor inválido: não é um número/ });
  });
});
