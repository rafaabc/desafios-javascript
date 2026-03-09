/*
Desafio: Gerenciar Registro de Pedidos (listar e registrar)

Descrição:
Mantém um registro de pedidos com operações para listar e registrar,
retornando o último pedido cadastrado quando aplicável.

Regras:
- Validar integridade dos campos do pedido.

Entrada:
- Para listar: nenhuma.
- Para registrar: objeto com `numero`, `item`, `quantidade`, `valorUnitario`.

Processamento:
- Calcular total por pedido e formatar saída.

Saída:
- Lista formatada ou o último pedido registrado.
*/

const pedidos = [
  { numero: 101, item: "Pizza", quantidade: 2, valorUnitario: 45 },
  { numero: 102, item: "Hambúrguer", quantidade: 1, valorUnitario: 28 },
  { numero: 103, item: "Refrigerante", quantidade: 3, valorUnitario: 6 },
];

export function listarPedidos() {
  const pedidosComFormato = [];
  pedidos.forEach((pedido) => {
    const total = pedido.quantidade * pedido.valorUnitario;
    pedidosComFormato.push(
      `Pedido ${pedido.numero}: ${pedido.item} / Quantidade: ${pedido.quantidade} / Valor unitário: R$ ${pedido.valorUnitario.toFixed(2)} / Total: R$ ${total.toFixed(2)}`,
    );
  });
  return pedidosComFormato;
}

export function registrarPedido({ numero, item, quantidade, valorUnitario }) {
  const novoPedido = { numero, item, quantidade, valorUnitario };
  pedidos.push(novoPedido);
  return pedidos.at(-1);
}
