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
  [["id", id]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const idNum = Number(id);
  if (tarefas.some((t) => Number(t.id) === idNum)) throw new Error("O ID não pode se repetir");

  const prioridadesValidas = ["Baixa", "Média", "Alta"];
  const statusValidos = ["Pendente", "Em andamento", "Concluída"];
  if (!prioridadesValidas.includes(prioridade)) throw new Error("A prioridade deve ser: Baixa, Média ou Alta");
  if (!statusValidos.includes(status)) throw new Error("O status deve ser: Pendente, Em andamento ou Concluída");

  const tarefa = { id: idNum, descricao, prioridade, status };
  tarefas.push(tarefa);
  return tarefas.at(-1);
}
