/*
Desafio: Gerenciar Registro de Pedidos (listar e registrar)
Entradas: (listar) nenhuma, (registrar) numero, item, quantidade, valorUnitario
Processamento: manter lista de pedidos e calcular total por pedido
Saída: lista formatada / último pedido cadastrado
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
