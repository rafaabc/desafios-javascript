/**
 * Desafio: Gerenciar Nota De Aluno
 *
 * Descrição:
 * Garante operações de listar e registrar alunos com suas notas, mantendo
 * uma lista e aplicando validações básicas, retornando o último aluno.
 *
 * Regras:
 * - Validar formatos e limites das notas ao registrar.
 *
 * Entrada:
 * - Para listar: nenhuma.
 * - Para registrar: objeto com dados do aluno e notas.
 *
 * Processamento:
 * - Validar e adicionar o registro do aluno à lista.
 *
 * Saída:
 * - Lista formatada de alunos ou o último aluno cadastrado.
 */
const alunos = [
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 5.5 },
  { nome: "Ana", nota: 8 },
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
