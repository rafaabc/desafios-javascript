/*
Desafio 9: Sistema de Controle de Tarefas
Parte A - Listar Tarefas
Você possui uma lista de tarefas:

"Estudar JavaScript", prioridade "Alta", status "Pendente"
"Fazer exercícios", prioridade "Média", status "Pendente"
"Ler livro", prioridade "Baixa", status "Concluída"

Crie uma função que liste todas as tarefas.
Entrada

N/A (a lista já está cadastrada)

Processamento

Percorrer a lista de tarefas
Formatar cada tarefa no padrão: "Tarefa: Estudar JavaScript / Prioridade: Alta / Status: Pendente"

Saída

Lista com todas as tarefas formatadas

Parte B - Adicionar Tarefa
Crie uma função que adicione uma nova tarefa à lista.
Entrada

Descrição da tarefa
Prioridade da tarefa
Status da tarefa

Processamento

Adicionar a descrição, prioridade e status como um novo item da lista

Saída

A última tarefa da lista
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
