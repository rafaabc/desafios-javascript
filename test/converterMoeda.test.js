import { converterDKKEUR } from "../src/converterMoeda.js";
import assert from "node:assert";

describe("Testes do conversorDKKEUR", () => {
  it("Quando informar 100 DKK, deve retornar 13 EUR", () => {
    const conversorDKK = converterDKKEUR(100);
    assert.equal(conversorDKK, "100 DKK equivalem a 13 EUR.");
  });
});
