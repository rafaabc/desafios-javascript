/**
 * Desafio: Registrar Funcionário
 *
 * Descrição:
 * Registra funcionários aplicando validações sobre cargo e salário mínimo,
 * armazenando os registros e retornando o último funcionário cadastrado.
 *
 * Regras:
 * - `cargo` deve ser um dos: Gerente, Analista, Assistente, Estagiário.
 * - `salario` deve ser maior que 1412.
 *
 * Entrada:
 * - Objeto com `CPF`, `nome`, `cargo`, `salario`.
 *
 * Processamento:
 * - Validar cargo e salário; inserir funcionário na lista.
 *
 * Saída:
 * - Retorna o último funcionário cadastrado (objeto).
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
