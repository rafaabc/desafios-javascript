import { listarPratos, registrarPrato } from "../src/gerenciarCardapioDeRestaurante.js";
import assert from "node:assert";

describe("Testes do gerenciarCardapioDeRestaurante", () => {
  it("quando listar pratos, deve retornar a lista dos pratos já cadastrados", () => {
    const resultadoEsperado = [
      "Prato: Feijoada / Preço: R$ 35.00 / Calorias: 850",
      "Prato: Lasanha / Preço: R$ 28.00 / Calorias: 650",
      "Prato: Salada Caesar / Preço: R$ 22.00 / Calorias: 320",
    ];

    const resultadoAtual = listarPratos();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar prato, deve retornar o último prato registrado", () => {
    const resultadoEsperado = {
      nome: "Sushi",
      preco: 45,
      calorias: 300,
    };

    const resultadoAtual = registrarPrato({ nome: "Sushi", preco: 45, calorias: 300 });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
