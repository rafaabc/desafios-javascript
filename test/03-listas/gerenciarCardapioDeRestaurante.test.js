import { listarPratos, registrarPrato } from "../../src/03_listas/gerenciarCardapioDeRestaurante.js";
import assert from "node:assert";

describe("Testes do gerenciarCardapioDeRestaurante", () => {
  it("quando listar pratos, deve retornar a lista dos pratos já cadastrados", () => {
    const resultadoAtual = listarPratos();
    const esperado = [
      "Prato: Feijoada / Preço: R$ 35.00 / Calorias: 850",
      "Prato: Lasanha / Preço: R$ 28.00 / Calorias: 650",
      "Prato: Salada Caesar / Preço: R$ 22.00 / Calorias: 320",
    ];

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar prato, deve retornar o último prato registrado", () => {
    const resultadoAtual = registrarPrato({ nome: "Sushi", preco: 45, calorias: 300 });
    const esperado = { nome: "Sushi", preco: 45, calorias: 300 };

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar prato com preco inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarPrato({ nome: "Risotto", preco: "quarenta", calorias: 300 });
    }, { message: /Parâmetro preco inválido: não é um número/ });
  });

  it("quando registrar prato com calorias inválidas (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarPrato({ nome: "Risotto", preco: 40, calorias: "trezentos" });
    }, { message: /Parâmetro calorias inválido: não é um número/ });
  });
});
