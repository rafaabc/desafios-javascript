/*
Desafio 6: Sistema de Cadastro de Funcionários
Parte A - Listar Funcionários
Você possui uma lista de funcionários:

Carlos, cargo "Gerente", salário R$ 8000.00
Beatriz, cargo "Analista", salário R$ 4500.00
Roberto, cargo "Assistente", salário R$ 2800.00

Crie uma função que liste todos os funcionários.
Entrada

N/A (a lista já está cadastrada)

Processamento

Percorrer a lista de funcionários
Formatar cada funcionário no padrão: "Nome: Carlos / Cargo: Gerente / Salário: R$ 8000.00"

Saída

Lista com todos os funcionários formatados

Parte B - Adicionar Funcionário
Crie uma função que adicione um novo funcionário à lista.
Entrada

Nome do funcionário
Cargo do funcionário
Salário do funcionário

Processamento

Adicionar o nome, cargo e salário como um novo item da lista

Saída

O último funcionário da lista
*/
const funcionarios = [
  {
    nome: "Carlos",
    cargo: "Gerente",
    salario: 8000,
  },
  {
    nome: "Beatriz",
    cargo: "Analista",
    salario: 4500,
  },
  {
    nome: "Roberto",
    cargo: "Assistente",
    salario: 2800,
  },
];

export function listarFuncionarios() {
  const funcionariosComFormatoDiferente = [];
  funcionarios.forEach((funcionario) => {
    funcionariosComFormatoDiferente.push(
      `Nome: ${funcionario.nome} / Cargo: ${funcionario.cargo} / Salário: R$ ${funcionario.salario.toFixed(2)}`,
    );
  });
  return funcionariosComFormatoDiferente;
}

export function registrarFuncionario({ nome, cargo, salario }) {
  const novoFuncionario = {
    nome,
    cargo,
    salario,
  };
  funcionarios.push(novoFuncionario);
  return funcionarios.at(-1);
}
