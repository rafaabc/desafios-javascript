import { listarAlunos, registrarAluno } from "../src/gerenciarNotaDeAluno.js";
import assert from "node:assert";

describe("Testes do gerenciarNotaDeAluno", () => {
  it("quando listar alunos, deve retornar a lista dos alunos já cadastrados", () => {
    const resultadoEsperado = [
      "Aluno: João / Nota: 7.5",
      "Aluno: Maria / Nota: 9.0",
      "Aluno: Pedro / Nota: 5.5",
      "Aluno: Ana / Nota: 8.0",
    ];

    const resultadoAtual = listarAlunos();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar aluno, deve retornar o último aluno registrado", () => {
    const resultadoEsperado = { nome: "Lucas", nota: 6.5 };

    const resultadoAtual = registrarAluno({ nome: "Lucas", nota: 6.5 });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
