import { calcularMediaComAprovacao } from "../src/calcularMediaComAprovacao.js";
import assert from "node:assert";

describe("Testes do calcularMediaComAprovacao", () => {
  it("Quando enviar 7, 7 e 7 deve retornar a média 7 e aprovação", () => {
    const media = calcularMediaComAprovacao(7, 7, 7);
    assert.equal(media, "Parabéns! Sua média é de 7 e você foi aprovado!");
  });
  it("Quando enviar 5, 5 e 5 deve retornar a média 5 e recuperação", () => {
    const media = calcularMediaComAprovacao(5, 5, 5);
    assert.equal(
      media,
      "OK! Sua média é de 5 e você está de recuperação. Ainda tem uma chance!",
    );
  });
  it("Quando enviar 4, 4 e 4 deve retornar a média 4 e reprovação", () => {
    const media = calcularMediaComAprovacao(4, 4, 4);
    assert.equal(media, "Ishh! Sua média é de 4 e você foi reprovado :(");
  });
});
