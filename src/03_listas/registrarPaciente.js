/*
Desafio: Registrar Paciente
Entradas: prontuario, nome, idade, convenio
Processamento: validar prontuario único, idade 0-120, convênio permitido
Saída: retornar último paciente cadastrado
/**
 * Desafio: Registrar Paciente
 *
 * Descrição:
 * Registra pacientes validando número de prontuário, limites de idade e
 * convênio, retornando o último paciente cadastrado.
 *
 * Regras:
 * - `prontuario` não pode se repetir.
 * - `idade` deve estar dentro de limites válidos.
 * - `convenio` deve pertencer às opções aceitas.
 *
 * Entrada:
 * - `prontuario`, `nome`, `idade`, `convenio`.
 *
 * Processamento:
 * - Validar duplicidade e limites; inserir paciente na lista.
 *
 * Saída:
 * - Retorna o último paciente registrado.
 */
const pacientes = [];

export function registrarPaciente({ prontuario, nome, idade, convenio }) {
  if (pacientes.some((p) => p.prontuario === prontuario)) throw new Error("O prontuário não pode se repetir");

  [["idade", idade]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const idadeNum = Number(idade);
  if (idadeNum < 0 || idadeNum > 120) throw new Error("A idade deve ser maior ou igual a 0 e menor ou igual a 120");

  const conveniosValidos = ["Particular", "Unimed", "Bradesco", "SulAmérica"];
  if (!conveniosValidos.includes(convenio)) throw new Error("O convênio deve ser: Particular, Unimed, Bradesco ou SulAmérica");

  const paciente = { prontuario, nome, idade: idadeNum, convenio };
  pacientes.push(paciente);
  return pacientes.at(-1);
}
