import { converterTemperatura } from "../src/converterTemperatura.js";
import assert from "node:assert";

describe("Testes do converterTemperatura", () => {
  it("Quando informar -3º celsius, deve retornar -26.6 fahrenheit e 270.15 kelvin.", () => {
    const temperatura = converterTemperatura(-3);
    assert.equal(
      temperatura,
      "-3º Celsius equivalem a 26.6 Fahrenheit e 270.15 Kelvin.",
    );
  });
  it("Quando informar 0º celsius, deve retornar 32 fahrenheit e 273.15 kelvin.", () => {
    const temperatura = converterTemperatura(0);
    assert.equal(
      temperatura,
      "0º Celsius equivalem a 32 Fahrenheit e 273.15 Kelvin.",
    );
  });
  it("Quando informar 25º celsius, deve retornar 77 fahrenheit e 298.15 kelvin.", () => {
    const temperatura = converterTemperatura(25);
    assert.equal(
      temperatura,
      "25º Celsius equivalem a 77 Fahrenheit e 298.15 Kelvin.",
    );
  });
});
