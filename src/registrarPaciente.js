/*
Desafio 5: Sistema de Registro de Pacientes
Você precisa criar uma função capaz de registrar pacientes de um consultório médico.
Cada paciente possui as seguintes informações: prontuário, nome, idade e convênio.
Regras de validação:

O prontuário não pode se repetir
O nome pode ser repetido
A idade deve ser maior ou igual a 0 e menor ou igual a 120
O convênio deve ser: "Particular", "Unimed", "Bradesco" ou "SulAmérica"

Ao final, a função deve retornar:

O último paciente registrado
*/

const pacientes = [];

export function registrarPaciente({ prontuario, nome, idade, convenio }) {
  if (pacientes.some((p) => p.prontuario === prontuario)) {
    throw new Error("O prontuário não pode se repetir");
  }

  if (idade < 0 || idade > 120) {
    throw new Error(
      "A idade deve ser maior ou igual a 0 e menor ou igual a 120",
    );
  }

  if (
    convenio != "Particular" &&
    convenio != "Unimed" &&
    convenio != "Bradesco" &&
    convenio != "SulAmérica"
  ) {
    throw new Error(
      "O convênio deve ser: Particular, Unimed, Bradesco ou SulAmérica",
    );
  }
  pacientes.push({
    prontuario: prontuario,
    nome: nome,
    idade: idade,
    convenio: convenio,
  });
  return pacientes.at(-1);
}
