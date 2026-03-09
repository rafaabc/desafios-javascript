import { listarDespesas, registrarDespesa } from "../src/gerenciarControleDeDespesa.js";
import assert from "node:assert";

describe("Testes do gerenciarControleDeDespesa", () => {
  it("quando listar despesas, deve retornar a lista das despesas já cadastradas", () => {
    const resultadoEsperado = [
      "Despesa: Aluguel / Valor: R$ 1200.00 / Categoria: Moradia",
      "Despesa: Mercado / Valor: R$ 450.00 / Categoria: Alimentação",
      "Despesa: Internet / Valor: R$ 100.00 / Categoria: Serviços",
      "Despesa: Restaurante / Valor: R$ 250.00 / Categoria: Alimentação",
    ];

    const resultadoAtual = listarDespesas();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar despesa, deve retornar a última despesa registrada", () => {
    const resultadoEsperado = {
      descricao: "Transporte",
      valor: 30,
      categoria: "Transporte",
    };

    const resultadoAtual = registrarDespesa({
      descricao: "Transporte",
      valor: 30,
      categoria: "Transporte",
    });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
