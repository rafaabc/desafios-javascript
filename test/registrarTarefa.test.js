import { registrarTarefa } from "../src/registrarTarefa.js";
import assert from "node:assert";

describe("Testes do registrarTarefa", () => {
  it("quando o ID é duplicado, deve lançar um erro", () => {
    const tarefa1 = {
      id: 1,
      descricao: "Tarefa 1",
      prioridade: "Alta",
      status: "Pendente",
    };
    registrarTarefa(tarefa1);
    assert.throws(() => {
      registrarTarefa(tarefa1);
    }, /O ID não pode se repetir/);
  });
  it("quando a prioridade é inválida, deve lançar um erro", () => {
    const tarefa2 = {
      id: 2,
      descricao: "Tarefa 2",
      prioridade: "Muito Alta",
      status: "Pendente",
    };
    assert.throws(() => {
      registrarTarefa(tarefa2);
    }, /A prioridade deve ser: Baixa, Média ou Alta/);
  });
  it("quando o status é inválido, deve lançar um erro", () => {
    const tarefa3 = {
      id: 3,
      descricao: "Tarefa 3",
      prioridade: "Alta",
      status: "Finalizada",
    };
    assert.throws(() => {
      registrarTarefa(tarefa3);
    }, /O status deve ser: Pendente, Em andamento ou Concluída/);
  });
  it("quando a tarefa é válida, deve retornar a última tarefa registrada", () => {
    const tarefa4 = {
      id: 4,
      descricao: "Tarefa 4",
      prioridade: "Média",
      status: "Pendente",
    };
    const ultimaTarefa = registrarTarefa(tarefa4);
    assert.deepStrictEqual(ultimaTarefa, tarefa4);
  });
});
