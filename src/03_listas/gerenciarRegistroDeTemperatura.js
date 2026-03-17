/*
Desafio: Gerenciar Registro de Temperaturas (listar e registrar)

Descrição:
Registra leituras de temperatura e permite listar os registros, retornando
o último registro cadastrado.

Regras:
- Validar formato e valores das leituras conforme esperado.

Entrada:
- Para listar: nenhuma.
- Para registrar: objeto com `horario` e `temperatura`.

Processamento:
- Validar e adicionar registro à lista.

Saída:
- Lista de registros ou o último registro adicionado.
*/

const temperaturas = [
  { horario: "8h", temperatura: 18 },
  { horario: "12h", temperatura: 25 },
  { horario: "16h", temperatura: 28 },
  { horario: "20h", temperatura: 22 },
];

export function listarTemperaturas() {
  const temperaturasComFormato = [];
  temperaturas.forEach((registro) => {
    temperaturasComFormato.push(
      `Horário: ${registro.horario} / Temperatura: ${registro.temperatura}°C`,
    );
  });
  return temperaturasComFormato;
}

export function registrarTemperatura({ horario, temperatura }) {
  [["temperatura", temperatura]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const novoRegistro = { horario, temperatura: Number(temperatura) };
  temperaturas.push(novoRegistro);
  return temperaturas.at(-1);
}
