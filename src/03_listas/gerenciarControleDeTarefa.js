/**
 * Desafio: Gerenciar Controle de Tarefa
 *
 * Descrição:
 * Fornece operações para listar e registrar tarefas, mantendo-as em uma
 * lista em memória e retornando o último registro quando solicitado.
 *
 * Regras:
 * - Validar campos como prioridade e status ao registrar.
 *
 * Entrada:
 * - Para listar: nenhum parâmetro.
 * - Para registrar: objeto com dados da tarefa.
 *
 * Processamento:
 * - Validar dados e adicionar à lista de tarefas.
 *
 * Saída:
 * - Lista de tarefas ou o último registro adicionado.
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
  if (!descricao || typeof descricao !== 'string') throw new Error('Parâmetro descricao inválido');

  const prioridadesValidas = ['Alta', 'Média', 'Baixa'];
  if (!prioridade || !prioridadesValidas.includes(prioridade)) {
    throw new Error('Parâmetro prioridade inválido');
  }

  const statusValidos = ['Pendente', 'Concluída'];
  if (!status || !statusValidos.includes(status)) {
    throw new Error('Parâmetro status inválido');
  }

  const novaTarefa = { descricao, prioridade, status };
  tarefas.push(novaTarefa);
  return tarefas.at(-1);
}
