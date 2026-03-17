import { calcularMaioridade } from "../../src/01-basicos/calcularMaioridade.js";
import assert from "node:assert";

describe("Testes do calcularMaioridade", () => {
  it("Quando idade é igual a 17 retornar menor de idade", () => {
    const resultado = calcularMaioridade(2026, 2009);
    assert.equal(resultado, "Sua idade é de 17 anos. Você é menor de idade.");
  });

  it("Quando idade é igual a 18 retornar maior de idade", () => {
    const resultado = calcularMaioridade(2026, 2008);
    assert.equal(resultado, "Sua idade é de 18 anos. Você é maior de idade.");
  });

  it("Quando idade é igual a 19 retornar maior de idade", () => {
    const resultado = calcularMaioridade(2026, 2007);
    assert.equal(resultado, "Sua idade é de 19 anos. Você é maior de idade.");
  });

  it("Quando anoAtual for inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      calcularMaioridade("dois mil e vinte seis", 2007);
    }, { message: /Parâmetro anoAtual inválido: não é um número/ });
  });

  it("Quando anoNascimento for inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      calcularMaioridade(2026, "dois mil e sete");
    }, { message: /Parâmetro anoNascimento inválido: não é um número/ });
  });
});
