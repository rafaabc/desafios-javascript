/*
Desafio 8: Sistema de Cadastro de Cursos
Você precisa criar uma função capaz de registrar cursos de uma plataforma de ensino.
Cada curso possui as seguintes informações: código, nome, carga horária e categoria.
Regras de validação:

O código não pode se repetir
O nome pode ser repetido
A carga horária deve ser maior ou igual a 4 e menor ou igual a 200
A categoria deve ser: "Tecnologia", "Design", "Marketing" ou "Negócios"

Ao final, a função deve retornar:

o último curso cadastrado
*/
const cursos = [];

export function cadastrarCurso({ codigo, nome, cargaHoraria, categoria }) {
  if (cursos.some((c) => c.codigo === codigo)) {
    throw new Error("O código não pode se repetir");
  }

  if (cargaHoraria < 4 || cargaHoraria > 200) {
    throw new Error(
      "A carga horária deve ser maior ou igual a 4 e menor ou igual a 200",
    );
  }

  if (
    categoria !== "Tecnologia" &&
    categoria !== "Design" &&
    categoria !== "Marketing" &&
    categoria !== "Negócios"
  ) {
    throw new Error(
      "A categoria deve ser: Tecnologia, Design, Marketing ou Negócios",
    );
  }

  const curso = {
    codigo: codigo,
    nome: nome,
    cargaHoraria: cargaHoraria,
    categoria: categoria,
  };

  cursos.push(curso);

  return cursos.at(-1);
}
