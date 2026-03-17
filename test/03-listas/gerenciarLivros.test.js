import { listarLivros, registrarLivro } from "../../src/03_listas/gerenciarLivros.js";
import assert from "node:assert";

describe("Testes do gerenciarLivros", () => {
  it("quando listar livros, deve retornar a lista dos livros já cadastrados", () => {
    const resultadoAtual = listarLivros();
    const esperado = [
      "Livro: 1984 / Autor: George Orwell / Páginas: 328",
      "Livro: Dom Casmurro / Autor: Machado de Assis / Páginas: 256",
      "Livro: O Senhor dos Anéis / Autor: J.R.R. Tolkien / Páginas: 1178",
    ];

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar livro, deve retornar o último livro registrado", () => {
    const resultadoAtual = registrarLivro({
      titulo: "The Complete Fiction of H.P. Lovecraft",
      autor: "H.P. Lovecraft",
      paginas: 2125,
    });
    const esperado = { titulo: "The Complete Fiction of H.P. Lovecraft", autor: "H.P. Lovecraft", paginas: 2125 };

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar livro com paginas inválidas (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarLivro({ titulo: "X", autor: "Y", paginas: "duzentas" });
    }, { message: /Parâmetro paginas inválido: não é um número/ });
  });
});
