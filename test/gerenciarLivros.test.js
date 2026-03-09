import { listarLivros, registrarLivro } from "../src/gerenciarLivros.js";
import assert from "node:assert";

describe("Testes do gerenciarLivros", () => {
  it("quando listar livros, deve retornar a lista dos livros já cadastrados", () => {
    const resultadoEsperado = [
      "Livro: 1984 / Autor: George Orwell / Páginas: 328",
      "Livro: Dom Casmurro / Autor: Machado de Assis / Páginas: 256",
      "Livro: O Senhor dos Anéis / Autor: J.R.R. Tolkien / Páginas: 1178",
    ];
    const resultadoAtual = listarLivros();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar livro, deve retornar o último livro registrado", () => {
    const resultadoEsperado = {
      titulo: "The Complete Fiction of H.P. Lovecraft",
      autor: "H.P. Lovecraft",
      paginas: 2125,
    };
    const resultadoAtual = registrarLivro({
      titulo: "The Complete Fiction of H.P. Lovecraft",
      autor: "H.P. Lovecraft",
      paginas: 2125,
    });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
