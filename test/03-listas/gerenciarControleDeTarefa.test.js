import { listarTarefas, registrarTarefa } from "../../src/03_listas/gerenciarControleDeTarefa.js";
import assert from "node:assert";

describe("Testes do gerenciarControleDeTarefa", () => {
  it("quando listar tarefas, deve retornar a lista das tarefas já cadastradas", () => {
    const resultadoEsperado = [
      "Tarefa: Estudar JavaScript / Prioridade: Alta / Status: Pendente",
      "Tarefa: Fazer exercícios / Prioridade: Média / Status: Pendente",
      "Tarefa: Ler livro / Prioridade: Baixa / Status: Concluída",
    ];

    const resultadoAtual = listarTarefas();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar tarefa, deve retornar a última tarefa registrada", () => {
    const resultadoEsperado = { descricao: "Enviar relatório", prioridade: "Alta", status: "Pendente" };

    const resultadoAtual = registrarTarefa({ descricao: "Enviar relatório", prioridade: "Alta", status: "Pendente" });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
  it("quando descricao for inválida deve lançar erro", () => {
    assert.throws(() => registrarTarefa({ descricao: '', prioridade: 'Alta', status: 'Pendente' }), {
      message: /Parâmetro descricao inválido/
    });
  });
  it("quando prioridade for inválida deve lançar erro", () => {
    assert.throws(() => registrarTarefa({ descricao: 'X', prioridade: 'Muito Alta', status: 'Pendente' }), {
      message: /Parâmetro prioridade inválido/
    });
  });
  it("quando status for inválido deve lançar erro", () => {
    assert.throws(() => registrarTarefa({ descricao: 'Y', prioridade: 'Alta', status: 'Em pausa' }), {
      message: /Parâmetro status inválido/
    });
  });
});
