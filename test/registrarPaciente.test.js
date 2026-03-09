import { registrarPaciente } from "../src/registrarPaciente.js";
import assert from "node:assert";

describe("Testes do registrarPaciente", () => {
  it("Quando prontuário é duplicado, deve lançar um erro", () => {
    const paciente1 = {
      prontuario: "001",
      nome: "Paciente A",
      idade: 30,
      convenio: "Unimed",
    };
    registrarPaciente(paciente1);
    assert.throws(() => {
      registrarPaciente(paciente1);
    }, /O prontuário não pode se repetir/);
  });
  it("Quando idade é inválida com limite inferior, deve lançar um erro", () => {
    const paciente2 = {
      prontuario: "002",
      nome: "Paciente B",
      idade: -5,
      convenio: "Unimed",
    };
    assert.throws(() => {
      registrarPaciente(paciente2);
    }, /A idade deve ser maior ou igual a 0 e menor ou igual a 120/);
  });
  it("Quando idade é inválida com limite superior, deve lançar um erro", () => {
    const paciente4 = {
      prontuario: "004",
      nome: "Paciente D",
      idade: 150,
    };
    assert.throws(() => {
      registrarPaciente(paciente4);
    }, /A idade deve ser maior ou igual a 0 e menor ou igual a 120/);
  });
  it("Quando convênio é inválido, deve lançar um erro", () => {
    const paciente5 = {
      prontuario: "005",
      nome: "Paciente E",
      idade: 40,
      convenio: "Invalid",
    };
    assert.throws(() => {
      registrarPaciente(paciente5);
    }, /O convênio deve ser: Particular, Unimed, Bradesco ou SulAmérica/);
  });
  it("Quando os dados são válidos, deve registrar o paciente e retornar o último registro", () => {
    const paciente3 = {
      prontuario: "003",
      nome: "Paciente C",
      idade: 25,
      convenio: "Unimed",
    };
    const ultimoRegistro = registrarPaciente(paciente3);
    assert.deepStrictEqual(ultimoRegistro, paciente3);
  });
});
