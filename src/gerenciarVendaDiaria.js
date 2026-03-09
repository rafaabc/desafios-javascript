/*
Desafio 7: Sistema de Vendas Diárias
Parte A - Listar Vendas
Você possui uma lista de vendas realizadas no dia:

Venda 1: R$ 150.00
Venda 2: R$ 85.50
Venda 3: R$ 220.00
Venda 4: R$ 95.00

Crie uma função que liste todas as vendas.
Entrada

N/A (a lista já está cadastrada)

Processamento

Percorrer a lista de vendas
Formatar cada venda no padrão: "Venda 1: R$ 150.00"

Saída

Lista com todas as vendas formatadas

Parte B - Adicionar Venda
Crie uma função que adicione uma nova venda à lista.
Entrada

Número da venda
Valor da venda

Processamento

Adicionar o número e valor como um novo item da lista

Saída

A última venda da lista
*/
const vendas = [
  {
    numero: 1,
    valor: 150,
  },
  {
    numero: 2,
    valor: 85.5,
  },
  {
    numero: 3,
    valor: 220,
  },
  {
    numero: 4,
    valor: 95,
  },
];

export function listarVendas() {
  const vendasComFormatoDiferente = [];
  vendas.forEach((venda) => {
    vendasComFormatoDiferente.push(
      `Venda ${venda.numero}: R$ ${venda.valor.toFixed(2)}`,
    );
  });
  return vendasComFormatoDiferente;
}

export function registrarVenda({ numero, valor }) {
  const novaVenda = {
    numero,
    valor,
  };
  vendas.push(novaVenda);
  return vendas.at(-1);
}
