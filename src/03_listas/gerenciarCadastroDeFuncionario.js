/*
Desafio: Gerenciar Cadastro de Funcionários (listar e registrar)
Entradas: (listar) nenhuma, (registrar) nome, cargo, salario
Processamento: manter lista, validar formatos ao registrar
Saída: lista formatada / último funcionário cadastrado
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
