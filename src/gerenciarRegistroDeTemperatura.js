/*
Desafio 4: Sistema de Registro de Temperaturas
Parte A - Listar Temperaturas
Você possui uma lista de temperaturas registradas ao longo do dia:

8h: 18°C
12h: 25°C
16h: 28°C
20h: 22°C

Crie uma função que liste todas as temperaturas.
Entrada

N/A (a lista já está cadastrada)

Processamento

Percorrer a lista de temperaturas
Formatar cada registro no padrão: "Horário: 8h / Temperatura: 18°C"

Saída

Lista com todas as temperaturas formatadas

Parte B - Adicionar Temperatura
Crie uma função que adicione um novo registro de temperatura.
Entrada

Horário
Temperatura

Processamento

Adicionar o horário e temperatura como um novo item da lista

Saída

O último registro da lista
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
