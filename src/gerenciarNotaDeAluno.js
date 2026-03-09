/*
Desafio 3: Sistema de Notas de Alunos
Parte A - Listar Alunos
Você possui uma lista de alunos com suas notas:

João: nota 7.5
Maria: nota 9.0
Pedro: nota 5.5
Ana: nota 8.0

Crie uma função que liste todos os alunos.
Entrada
- N/A (a lista já está cadastrada)

Processamento
- Percorrer a lista de alunos
- Formatar cada aluno no padrão: "Aluno: João / Nota: 7.5"

Saída
- Lista com todos os alunos formatados

Parte B - Adicionar Aluno
Crie uma função que adicione um novo aluno à lista.

Entrada
- Nome do aluno
- Nota do aluno

Processamento
- Adicionar o nome e nota como um novo item da lista

Saída
- O último aluno da lista
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
