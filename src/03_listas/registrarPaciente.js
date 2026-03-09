/*
Desafio: Registrar Paciente
Entradas: prontuario, nome, idade, convenio
Processamento: validar prontuario único, idade 0-120, convênio permitido
Saída: retornar último paciente cadastrado
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
