import { calcularMedia } from "../src/calcularMedia.js";
import assert from "node:assert";

describe("Testes do calcularMedia", () => {
  it("Quando informar 1, 2 e 3 deve retornar média de 2", () => {
    const media = calcularMedia(1, 2, 3);
    assert.equal(media, "O resultado da média de 1, 2 e 3 é igual a 2.");
  });
});
