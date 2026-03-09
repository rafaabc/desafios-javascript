/**
 * Desafio: Gerenciar Cadastro de Funcionário
 *
 * Descrição:
 * Fornece operações de listar e registrar funcionários, mantendo uma lista
 * em memória e aplicando validações necessárias.
 *
 * Regras:
 * - CPF deve ser único quando aplicável.
 * - Validações específicas aplicadas ao registrar (conforme função).
 *
 * Entrada:
 * - Para listar: nenhuma entrada.
 * - Para registrar: objeto com dados do funcionário.
 *
 * Processamento:
 * - Validar dados ao registrar; adicionar à lista; retornar resultado.
 *
 * Saída:
 * - Lista de funcionários ou o último funcionário registrado.
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
