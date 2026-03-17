import { listarTemperaturas, registrarTemperatura } from "../../src/03_listas/gerenciarRegistroDeTemperatura.js";
import assert from "node:assert";

describe("Testes do gerenciarRegistroDeTemperatura", () => {
  it("quando listar temperaturas, deve retornar a lista dos registros já cadastrados", () => {
    const resultadoAtual = listarTemperaturas();
    const esperado = [
      "Horário: 8h / Temperatura: 18°C",
      "Horário: 12h / Temperatura: 25°C",
      "Horário: 16h / Temperatura: 28°C",
      "Horário: 20h / Temperatura: 22°C",
    ];

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar temperatura, deve retornar o último registro", () => {
    const resultadoAtual = registrarTemperatura({ horario: "22h", temperatura: 20 });
    const esperado = { horario: "22h", temperatura: 20 };

    assert.deepEqual(resultadoAtual, esperado);
  });

  it("quando registrar temperatura com valor inválido (não numérico), deve lançar erro", () => {
    assert.throws(() => {
      registrarTemperatura({ horario: "23h", temperatura: "vinte" });
    }, { message: /Parâmetro temperatura inválido: não é um número/ });
  });
});
