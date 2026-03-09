import { listarTemperaturas, registrarTemperatura } from "../../src/03_listas/gerenciarRegistroDeTemperatura.js";
import assert from "node:assert";

describe("Testes do gerenciarRegistroDeTemperatura", () => {
  it("quando listar temperaturas, deve retornar a lista dos registros já cadastrados", () => {
    const resultadoEsperado = [
      "Horário: 8h / Temperatura: 18°C",
      "Horário: 12h / Temperatura: 25°C",
      "Horário: 16h / Temperatura: 28°C",
      "Horário: 20h / Temperatura: 22°C",
    ];

    const resultadoAtual = listarTemperaturas();

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });

  it("quando registrar temperatura, deve retornar o último registro", () => {
    const resultadoEsperado = { horario: "22h", temperatura: 20 };

    const resultadoAtual = registrarTemperatura({ horario: "22h", temperatura: 20 });

    assert.deepEqual(resultadoEsperado, resultadoAtual);
  });
});
