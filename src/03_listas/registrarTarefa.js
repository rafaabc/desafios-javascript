/*
Desafio: Registrar Tarefa
Entradas: id, descricao, prioridade, status
Processamento: validar id único, prioridade e status permitidos
Saída: retornar última tarefa cadastrada
/**
 * Desafio: Registrar Tarefa
 *
 * Descrição:
 * Registra tarefas com validação de duplicidade, prioridade e status,
 * retornando o último registro adicionado.
 *
 * Regras:
 * - `id` deve ser único.
 * - `prioridade` e `status` devem estar entre os valores permitidos.
 *
 * Entrada:
 * - `id`, `descricao`, `prioridade`, `status` (dados da tarefa)
 *
 * Processamento:
 * - Validar e adicionar à lista de tarefas.
 *
 * Saída:
 * - Retorna a última tarefa registrada.
 */
const tarefas = [];

export function registrarTarefa({ id, descricao, prioridade, status }) {
  if (tarefas.some((t) => t.id === id)) {
    throw new Error("O ID não pode se repetir");
  }

  if (prioridade != "Baixa" && prioridade != "Média" && prioridade != "Alta") {
    throw new Error("A prioridade deve ser: Baixa, Média ou Alta");
  }

  if (status != "Pendente" && status != "Em andamento" && status != "Concluída") {
    throw new Error("O status deve ser: Pendente, Em andamento ou Concluída");
  }

  const tarefa = { id, descricao, prioridade, status };
  tarefas.push(tarefa);
  return tarefas.at(-1);
}
