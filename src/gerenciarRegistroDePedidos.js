/*
Desafio 10: Sistema de Registro de Pedidos
Parte A - Listar Pedidos
Você possui uma lista de pedidos:

Pedido 101: Pizza, 2 unidades, R$ 45.00 cada
Pedido 102: Hambúrguer, 1 unidade, R$ 28.00 cada
Pedido 103: Refrigerante, 3 unidades, R$ 6.00 cada

Crie uma função que liste todos os pedidos.
Entrada

N/A (a lista já está cadastrada)

Processamento

Percorrer a lista de pedidos
Calcular o total de cada pedido (quantidade × valor unitário)
Formatar cada pedido no padrão: "Pedido 101: Pizza / Quantidade: 2 / Valor unitário: R$ 45.00 / Total: R$ 90.00"

Saída

Lista com todos os pedidos formatados

Parte B - Adicionar Pedido
Crie uma função que adicione um novo pedido à lista.
Entrada

Número do pedido
Nome do item
Quantidade
Valor unitário

Processamento

Adicionar o número, nome, quantidade e valor unitário como um novo item da lista

Saída

O último pedido da lista
*/
const pedidos = [
  {
    numero: 101,
    item: "Pizza",
    quantidade: 2,
    valorUnitario: 45,
  },
  {
    numero: 102,
    item: "Hambúrguer",
    quantidade: 1,
    valorUnitario: 28,
  },
  {
    numero: 103,
    item: "Refrigerante",
    quantidade: 3,
    valorUnitario: 6,
  },
];

export function listarPedidos() {
  const pedidosComFormatoDiferente = [];
  pedidos.forEach((pedido) => {
    const total = pedido.quantidade * pedido.valorUnitario;
    pedidosComFormatoDiferente.push(
      `Pedido ${pedido.numero}: ${pedido.item} / Quantidade: ${pedido.quantidade} / Valor unitário: R$ ${pedido.valorUnitario.toFixed(2)} / Total: R$ ${total.toFixed(2)}`,
    );
  });
  return pedidosComFormatoDiferente;
}

export function registrarPedido({ numero, item, quantidade, valorUnitario }) {
  const novoPedido = {
    numero,
    item,
    quantidade,
    valorUnitario,
  };
  pedidos.push(novoPedido);
  return pedidos.at(-1);
}
