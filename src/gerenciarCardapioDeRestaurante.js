/*
Desafio 8: Sistema de Cardápio de Restaurante
Parte A - Listar Pratos
Você possui uma lista de pratos do cardápio:

Feijoada: R$ 35.00, 850 calorias
Lasanha: R$ 28.00, 650 calorias
Salada Caesar: R$ 22.00, 320 calorias

Crie uma função que liste todos os pratos.
Entrada

N/A (a lista já está cadastrada)

Processamento

Percorrer a lista de pratos
Formatar cada prato no padrão: "Prato: Feijoada / Preço: R$ 35.00 / Calorias: 850"

Saída

Lista com todos os pratos formatados

Parte B - Adicionar Prato
Crie uma função que adicione um novo prato ao cardápio.
Entrada

Nome do prato
Preço do prato
Calorias do prato

Processamento

Adicionar o nome, preço e calorias como um novo item da lista

Saída

O último prato da lista
*/
const cardapio = [
  {
    nome: "Feijoada",
    preco: 35,
    calorias: 850,
  },
  {
    nome: "Lasanha",
    preco: 28,
    calorias: 650,
  },
  {
    nome: "Salada Caesar",
    preco: 22,
    calorias: 320,
  },
];

export function listarPratos() {
  const pratosComFormatoDiferente = [];
  cardapio.forEach((prato) => {
    pratosComFormatoDiferente.push(
      `Prato: ${prato.nome} / Preço: R$ ${prato.preco.toFixed(2)} / Calorias: ${prato.calorias}`,
    );
  });
  return pratosComFormatoDiferente;
}

export function registrarPrato({ nome, preco, calorias }) {
  const novoPrato = {
    nome,
    preco,
    calorias,
  };
  cardapio.push(novoPrato);
  return cardapio.at(-1);
}
