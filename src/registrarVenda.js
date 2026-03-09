/*
Desafio 3: Sistema de Controle de Vendas
Você precisa criar uma função capaz de registrar vendas de uma loja.
Cada venda possui as seguintes informações: número da venda, nome do cliente, valor e forma de pagamento.
Regras de validação:

O número da venda não pode se repetir
O nome do cliente pode ser repetido
O valor deve ser maior que 0
A forma de pagamento deve ser: "Dinheiro", "Débito", "Crédito" ou "PIX"

Ao final, a função deve retornar:

A última venda registrada
*/

const vendas = [];

export function registrarVenda({
  numeroDaVenda,
  nomeDoCliente,
  valorDaVenda,
  formaDePagamento,
}) {
  if (vendas.some((v) => v.numeroDaVenda === numeroDaVenda)) {
    throw new Error("O número da venda não pode se repetir");
  }

  if (valorDaVenda <= 0) {
    throw new Error("O valor deve ser maior que 0");
  }

  if (
    formaDePagamento != "Dinheiro" &&
    formaDePagamento != "Débito" &&
    formaDePagamento != "Crédito" &&
    formaDePagamento != "PIX"
  ) {
    throw new Error(
      "A forma de pagamento deve ser: Dinheiro, Débito, Crédito ou PIX",
    );
  }

  vendas.push({
    numeroDaVenda: numeroDaVenda,
    nomeDoCliente: nomeDoCliente,
    valorDaVenda: valorDaVenda,
    formaDePagamento: formaDePagamento,
  });
  return vendas.at(-1);
}
