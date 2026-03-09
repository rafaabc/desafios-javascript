/*
Desafio 2: Sistema de Registro de Funcionários
Você precisa criar uma função capaz de registrar funcionários de uma empresa.
Cada funcionário possui as seguintes informações: CPF, nome, cargo e salário.
Regras de validação:

O cargo deve ser um dos seguintes: "Gerente", "Analista", "Assistente" ou "Estagiário"
O salário deve ser maior que 1412 (salário mínimo)

Ao final, a função deve retornar:

O último livro cadastrado
*/
const funcionarios = [];

export function registrarFuncionario({ CPF, nome, cargo, salario }) {
  if (
    cargo != "Gerente" &&
    cargo != "Analista" &&
    cargo != "Assistente" &&
    cargo != "Estagiário"
  ) {
    throw new Error(
      "O cargo deve ser um dos seguintes: Gerente, Analista, Assistente ou Estagiário",
    );
  }

  if (salario <= 1412) {
    throw new Error("O salário deve ser maior que 1412 (salário mínimo)");
  }

  funcionarios.push({
    CPF: CPF,
    nome: nome,
    cargo: cargo,
    salario: salario,
  });

  return funcionarios.at(-1);
}
