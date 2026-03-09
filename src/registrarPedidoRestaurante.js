/*
Desafio 7: Sistema de Registro de Pedidos de Restaurante
Você precisa criar uma função capaz de registrar pedidos de um restaurante.
Cada pedido possui as seguintes informações: número do pedido, nome do prato, quantidade e valor unitário.
Regras de validação:

O número do pedido não pode se repetir
O nome do prato pode ser repetido
A quantidade deve ser maior ou igual a 1
O valor unitário deve ser maior que 0

Ao final, a função deve retornar:

o ultimo pedido registrado
*/

const pedidos = [];

export function registrarPedido({
  numeroPedido,
  nomePrato,
  quantidade,
  valorUnitario,
}) {
  // Verificar se o número do pedido já existe
  if (pedidos.some((pedido) => pedido.numeroPedido === numeroPedido)) {
    throw new Error("Número do pedido já existe.");
  }

  if (quantidade < 1) {
    throw new Error("A quantidade deve ser maior ou igual a 1.");
  }

  if (valorUnitario <= 0) {
    throw new Error("O valor unitário deve ser maior que 0.");
  }

  const pedido = {
    numeroPedido,
    nomePrato,
    quantidade,
    valorUnitario,
  };

  pedidos.push(pedido);

  return pedidos.at(-1);
}
