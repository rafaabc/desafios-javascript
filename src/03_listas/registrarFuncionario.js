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
  const cargosValidos = ["Gerente", "Analista", "Assistente", "Estagiário"];
  if (!cargosValidos.includes(cargo)) throw new Error("O cargo deve ser um dos seguintes: Gerente, Analista, Assistente ou Estagiário");

  [["salario", salario]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const salarioNum = Number(salario);
  if (salarioNum <= 1412) throw new Error("O salário deve ser maior que 1412 (salário mínimo)");

  funcionarios.push({ CPF, nome, cargo, salario: salarioNum });
  return funcionarios.at(-1);
}
