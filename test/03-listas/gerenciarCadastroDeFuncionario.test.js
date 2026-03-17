import { listarFuncionarios, registrarFuncionario } from "../../src/03_listas/gerenciarCadastroDeFuncionario.js";
import assert from "node:assert";

describe("Testes do gerenciarCadastroDeFuncionario", () => {
  it("quando listar funcionarios, deve retornar a lista dos funcionários já cadastrados", () => {
    const resultadoAtual = listarFuncionarios();
    const esperado = [
      "Nome: Carlos / Cargo: Gerente / Salário: R$ 8000.00",
      "Nome: Beatriz / Cargo: Analista / Salário: R$ 4500.00",
      "Nome: Roberto / Cargo: Assistente / Salário: R$ 2800.00",
    ];

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar funcionario, deve retornar o último funcionário registrado", () => {
    const resultadoAtual = registrarFuncionario({ nome: "Mariana", cargo: "Estagiário", salario: 1200 });
    const esperado = { nome: "Mariana", cargo: "Estagiário", salario: 1200 };

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar funcionario com salario inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarFuncionario({ nome: "Paulo", cargo: "Analista", salario: "mil" });
    }, { message: /Parâmetro salario inválido: não é um número/ });
  });
});
