import { cadastrarCurso } from "../../src/03_listas/cadastrarCurso.js";
import assert from "node:assert";

describe("Testes do cadastrarCurso", () => {
  it("Quando o código for duplicado, deve lançar um erro", () => {
    cadastrarCurso({
      codigo: "CS101",
      nome: "Curso de JavaScript",
      cargaHoraria: 40,
      categoria: "Tecnologia",
    });
    assert.throws(() => {
      cadastrarCurso({
        codigo: "CS101",
        nome: "Curso de Python",
        cargaHoraria: 50,
        categoria: "Tecnologia",
      });
    }, { message: /O código não pode se repetir/ });
  });

  it("Quando a carga horária for inválida no limite inferior, deve lançar um erro", () => {
    const cursoComCargaHorariaInvalida = {
      codigo: "CS102",
      nome: "Curso de HTML",
      cargaHoraria: 3,
      categoria: "Tecnologia",
    };
    assert.throws(() => {
      cadastrarCurso(cursoComCargaHorariaInvalida);
    }, { message: /A carga horária deve ser maior ou igual a 4 e menor ou igual a 200/ });
  });

  it("Quando a carga horária for inválida no limite superior, deve lançar um erro", () => {
    const cursoComCargaHorariaInvalida = {
      codigo: "CS103",
      nome: "Curso de CSS",
      cargaHoraria: 201,
      categoria: "Tecnologia",
    };
    assert.throws(() => {
      cadastrarCurso(cursoComCargaHorariaInvalida);
    }, { message: /A carga horária deve ser maior ou igual a 4 e menor ou igual a 200/ });
  });

  it("Quando a categoria for inválida, deve lançar um erro", () => {
    const cursoComCategoriaInvalida = {
      codigo: "CS104",
      nome: "Curso de Marketing",
      cargaHoraria: 50,
      categoria: "Esportes",
    };
    assert.throws(() => {
      cadastrarCurso(cursoComCategoriaInvalida);
    }, { message: /A categoria deve ser: Tecnologia, Design, Marketing ou Negócios/ });
  });

  it("Quando os dados forem válidos, deve retornar o último curso cadastrado", () => {
    const cursoValido = {
      codigo: "CS105",
      nome: "Curso de UX Design",
      cargaHoraria: 60,
      categoria: "Design",
    };
    const ultimoCurso = cadastrarCurso(cursoValido);
    const esperado = cursoValido;
    assert.deepStrictEqual(ultimoCurso, esperado);
  });

  it("Quando a carga horária for inválida (não numérica), deve lançar um erro", () => {
    assert.throws(() => {
      cadastrarCurso({ codigo: "CS106", nome: "Curso X", cargaHoraria: "sessenta", categoria: "Design" });
    }, { message: /Parâmetro cargaHoraria inválido: não é um número/ });
  });
});
