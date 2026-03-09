/*
Desafio: Registrar Funcionário
Entradas: CPF, nome, cargo, salario
Processamento: validar cargo e salario mínimo
Saída: retornar último funcionário cadastrado
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
