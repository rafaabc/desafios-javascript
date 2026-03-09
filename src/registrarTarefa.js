/*
Desafio 6: Sistema de Cadastro de Tarefas
Você precisa criar uma função capaz de registrar tarefas de um projeto.
Cada tarefa possui as seguintes informações: ID, descrição, prioridade e status.
Regras de validação:

O ID não pode se repetir
A descrição pode ser repetida
A prioridade deve ser: "Baixa", "Média" ou "Alta"
O status deve ser: "Pendente", "Em andamento" ou "Concluída"

Ao final, a função deve retornar:

a última tarefa cadastrada
*/

const tarefas = [];

export function registrarTarefa({ id, descricao, prioridade, status }) {
  if (tarefas.some((t) => t.id === id)) {
    throw new Error("O ID não pode se repetir");
  }

  if (prioridade != "Baixa" && prioridade != "Média" && prioridade != "Alta") {
    throw new Error("A prioridade deve ser: Baixa, Média ou Alta");
  }

  if (
    status != "Pendente" &&
    status != "Em andamento" &&
    status != "Concluída"
  ) {
    throw new Error("O status deve ser: Pendente, Em andamento ou Concluída");
  }
  tarefas.push({
    id: id,
    descricao: descricao,
    prioridade: prioridade,
    status: status,
  });

  return tarefas.at(-1);
}
