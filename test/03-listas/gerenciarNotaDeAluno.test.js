import { listarAlunos, registrarAluno } from "../../src/03_listas/gerenciarNotaDeAluno.js";
import assert from "node:assert";

describe("Testes do gerenciarNotaDeAluno", () => {
  it("Quando listar alunos, deve retornar lista formatada", () => {
    const lista = listarAlunos();
    assert.ok(Array.isArray(lista));
    assert.ok(lista.length >= 3);
    assert.match(lista[0], /Aluno: .* \/ Nota: \d+\.\d/);
  });

  it("Quando registrar aluno, deve retornar o último aluno cadastrado", () => {
    const novo = { nome: "Teste", nota: 8 };
    const ultimo = registrarAluno(novo);
    const esperado = novo;
    assert.deepEqual(ultimo, esperado);
  });

  it("Quando registrar aluno com nota inválida (não numérica), deve lançar erro", () => {
    assert.throws(() => {
      registrarAluno({ nome: "X", nota: "oito" });
    }, { message: /Parâmetro nota inválido: não é um número/ });
  });
});
