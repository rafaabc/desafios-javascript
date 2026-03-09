/*
Desafio: Gerenciar Registro de Temperaturas (listar e registrar)
Entradas: (listar) nenhuma, (registrar) horario, temperatura
Processamento: manter lista de registros de temperatura
Saída: lista formatada / último registro cadastrado
*/
const temperaturas = [
  {
    horario: "8h",
    temperatura: 18,
  },
  {
    horario: "12h",
    temperatura: 25,
  },
  {
    horario: "16h",
    temperatura: 28,
  },
  {
    horario: "20h",
    temperatura: 22,
  },
];

export function listarTemperaturas() {
  const temperaturasComFormatoDiferente = [];
  temperaturas.forEach((registro) => {
    temperaturasComFormatoDiferente.push(
      `Horário: ${registro.horario} / Temperatura: ${registro.temperatura}°C`,
    );
  });
  return temperaturasComFormatoDiferente;
}

export function registrarTemperatura({ horario, temperatura }) {
  const novoRegistro = {
    horario,
    temperatura,
  };
  temperaturas.push(novoRegistro);
  return temperaturas.at(-1);
}
