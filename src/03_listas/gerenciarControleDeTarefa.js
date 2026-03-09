/*
Desafio: Gerenciar Controle de Tarefas (listar e registrar)
Entradas: (listar) nenhuma, (registrar) descricao, prioridade, status
Processamento: manter lista de tarefas e validar campos
Saída: lista formatada / última tarefa cadastrada
*/
const tarefas = [
  {
    descricao: "Estudar JavaScript",
    prioridade: "Alta",
    status: "Pendente",
  },
  {
    descricao: "Fazer exercícios",
    prioridade: "Média",
    status: "Pendente",
  },
  {
    descricao: "Ler livro",
    prioridade: "Baixa",
    status: "Concluída",
  },
];

export function listarTarefas() {
  const tarefasComFormatoDiferente = [];
  tarefas.forEach((tarefa) => {
    tarefasComFormatoDiferente.push(
      `Tarefa: ${tarefa.descricao} / Prioridade: ${tarefa.prioridade} / Status: ${tarefa.status}`,
    );
  });
  return tarefasComFormatoDiferente;
}

export function registrarTarefa({ descricao, prioridade, status }) {
  const novaTarefa = {
    descricao,
    prioridade,
    status,
  };
  tarefas.push(novaTarefa);
  return tarefas.at(-1);
}
