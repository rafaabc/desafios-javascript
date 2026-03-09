/*
Desafio: Registrar Tarefa
Entradas: id, descricao, prioridade, status
Processamento: validar id único, prioridade e status permitidos
Saída: retornar última tarefa cadastrada
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
