/*
Desafio: Sistema de Cadastro de Cursos
Entradas: codigo, nome, cargaHoraria, categoria
Processamento: validar código único, cargaHoraria e categorias permitidas
Saída: retornar o último curso cadastrado
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
