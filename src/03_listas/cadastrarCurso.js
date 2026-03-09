/**
 * Desafio: Sistema de Cadastro de Cursos
 *
 * Descrição:
 * Permite cadastrar cursos garantindo código único, carga horária válida e
 * categoria permitida, retornando o último curso cadastrado.
 *
 * Regras:
 * - `codigo` não pode se repetir.
 * - `cargaHoraria` deve estar entre 4 e 200.
 * - `categoria` deve ser uma das: Tecnologia, Design, Marketing, Negócios.
 *
 * Entrada:
 * - `codigo`, `nome`, `cargaHoraria`, `categoria`
 *
 * Processamento:
 * - Validar unicidade, limites e categoria; criar objeto curso e adicioná-lo.
 *
 * Saída:
 * - Retorna o último curso cadastrado (objeto).
 */
const cursos = [
  { codigo: "C001", nome: "Algoritmos", cargaHoraria: 40, categoria: "Tecnologia" },
  { codigo: "C002", nome: "Design UX", cargaHoraria: 60, categoria: "Design" },
];

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
