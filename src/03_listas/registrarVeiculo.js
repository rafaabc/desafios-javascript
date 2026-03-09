/*
Desafio: Registrar Veículo
Entradas: placa, modelo, ano, preco
Processamento: validar placa única, ano entre 2000 e 2026, preço mínimo
Saída: retornar último veículo cadastrado
*/
const veiculos = [];

export function registrarVeiculo({ placa, modelo, ano, preco }) {
  if (veiculos.some((p) => p.placa === placa)) {
    throw new Error("A placa não pode se repetir");
  }

  if (ano < 2000 || ano > 2026) {
    throw new Error(
      "O ano deve ser maior ou igual a 2000 e menor ou igual a 2026",
    );
  }

  if (preco < 10000) {
    throw new Error("O preço deve ser maior ou igual a 10000");
  }

  veiculos.push({
    placa: placa,
    modelo: modelo,
    ano: ano,
    preco: preco,
  });

  return veiculos.at(-1);
}
