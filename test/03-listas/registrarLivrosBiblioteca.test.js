import { registrarLivro } from "../../src/03_listas/registrarLivrosBiblioteca.js";
import assert from "node:assert";

describe("Testes do registrarLivro", () => {
  it("Quando registrar livro com ano de publicação menor ou igual a 1500, deve retornar erro", () => {
    const livrosComAnoDePublicacaoInvalido = {
      ISBN: 123,
      titulo: "titulo",
      autor: "autor",
      anoDePublicacao: 1499,
    };
    assert.throws(
      () => {
        registrarLivro(livrosComAnoDePublicacaoInvalido);
      },
      {
        name: "Error",
        message:
          "O ano de publicação deve ser maior que 1500 e menor ou igual a 2026",
      },
    );
  });

  it("Quando registrar livro com ano de publicação maior ou igual a 2027, deve retornar erro", () => {
    const livrosComAnoDePublicacaoInvalido = {
      ISBN: 123,
      titulo: "titulo",
      autor: "autor",
      anoDePublicacao: 2027,
    };
    assert.throws(
      () => {
        registrarLivro(livrosComAnoDePublicacaoInvalido);
      },
      {
        name: "Error",
        message:
          "O ano de publicação deve ser maior que 1500 e menor ou igual a 2026",
      },
    );
  });

  it("Quando registrar livro com dados válidos, deve retornar o último livro registrado", () => {
    const ultimoLivroAdicionado = registrarLivro({
      ISBN: 132,
      titulo: "título",
      autor: "autor",
      anoDePublicacao: 2020,
    });
    assert.deepEqual(ultimoLivroAdicionado, {
      ISBN: 132,
      titulo: "título",
      autor: "autor",
      anoDePublicacao: 2020,
    });
  });
});
