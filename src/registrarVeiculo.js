/*
Desafio 4: Sistema de Cadastro de Veículos
Você precisa criar uma função capaz de registrar veículos de uma concessionária.
Cada veículo possui as seguintes informações: placa, modelo, ano e preço.
Regras de validação:

A placa não pode se repetir
O modelo pode ser repetido
O ano deve ser maior ou igual a 2000 e menor ou igual a 2026
O preço deve ser maior ou igual a 10000

Ao final, a função deve retornar:

O último veículo registrado
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
