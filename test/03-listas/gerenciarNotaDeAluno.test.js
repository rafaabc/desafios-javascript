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
    assert.deepEqual(ultimo, novo);
  });
});
