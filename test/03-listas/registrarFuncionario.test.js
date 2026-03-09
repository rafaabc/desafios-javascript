import { registrarFuncionario } from "../../src/03_listas/registrarFuncionario.js";
import assert from "node:assert";

describe("Testes do registrarFuncionario", () => {
  it("Quando enviar salario menor que 1412, deve retornar erro", () => {
    const funcionarioComSalarioInvalido = {
      CPF: "0123456",
      nome: "teste",
      cargo: "Estagiário",
      salario: 1411,
    };
    assert.throws(
      () => {
        registrarFuncionario(funcionarioComSalarioInvalido);
      },
      {
        name: "Error",
        message: "O salário deve ser maior que 1412 (salário mínimo)",
      },
    );
  });

  it("Quando enviar salario igual a 1412, deve retornar erro", () => {
    const funcionarioComSalarioInvalido = {
      CPF: "0123456",
      nome: "teste",
      cargo: "Estagiário",
      salario: 1412,
    };
    assert.throws(
      () => {
        registrarFuncionario(funcionarioComSalarioInvalido);
      },
      {
        name: "Error",
        message: "O salário deve ser maior que 1412 (salário mínimo)",
      },
    );
  });

  it("Quando enviar cargo igual diferente de Gerente, Analista, Assistente ou Estagiário, deve retornar erro", () => {
    const funcionarioComSalarioInvalido = {
      CPF: "0123456",
      nome: "teste",
      cargo: "Jovem Aprendiz",
      salario: 2000,
    };
    assert.throws(
      () => {
        registrarFuncionario(funcionarioComSalarioInvalido);
      },
      {
        name: "Error",
        message:
          "O cargo deve ser um dos seguintes: Gerente, Analista, Assistente ou Estagiário",
      },
    );
  });

  it("Quando enviar funcionário com dados válidos, deve retornar o último registro", () => {
    const funcionarioComDadosValidos = {
      CPF: "0123456",
      nome: "teste",
      cargo: "Estagiário",
      salario: 2000,
    };
    const funcionarioRegistrado = registrarFuncionario(funcionarioComDadosValidos);

    assert.deepEqual(funcionarioRegistrado, {
      CPF: "0123456",
      nome: "teste",
      cargo: "Estagiário",
      salario: 2000,
    });
  });
});
