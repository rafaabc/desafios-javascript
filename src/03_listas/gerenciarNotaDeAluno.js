/*
Desafio: Gerenciar Notas de Alunos (listar e registrar)
Entradas: (listar) nenhuma, (registrar) nome, nota
Processamento: manter lista de alunos com notas
Saída: lista formatada / último aluno cadastrado
*/
const alunos = [
  {
    nome: "João",
    nota: 7.5,
  },
  {
    nome: "Maria",
    nota: 9,
  },
  {
    nome: "Pedro",
    nota: 5.5,
  },
  {
    nome: "Ana",
    nota: 8,
  },
];

export function listarAlunos() {
  const alunosComFormatoDiferente = [];
  alunos.forEach((aluno) => {
    alunosComFormatoDiferente.push(
      `Aluno: ${aluno.nome} / Nota: ${aluno.nota.toFixed(1)}`,
    );
  });
  return alunosComFormatoDiferente;
}

export function registrarAluno({ nome, nota }) {
  const novoAluno = {
    nome,
    nota,
  };
  alunos.push(novoAluno);
  return alunos.at(-1);
}
