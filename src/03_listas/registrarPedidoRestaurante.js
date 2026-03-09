/*
Desafio: Registrar Pedido de Restaurante

Descrição:
Registra pedidos de restaurante validando duplicidade e retornando o
último pedido registrado.

Regras:
- `numeroPedido` não pode se repetir.
- `quantidade` >= 1.
- `valorUnitario` > 0.

Entrada:
- Objeto com `numeroPedido`, `nomePrato`, `quantidade`, `valorUnitario`.

Processamento:
- Validar campos e adicionar o pedido à lista.

Saída:
- Retorna o último pedido registrado.
*/

const pedidos = [];

export function registrarPedido({ numeroPedido, nomePrato, quantidade, valorUnitario }) {
  if (pedidos.some((pedido) => pedido.numeroPedido === numeroPedido)) {
    throw new Error("Número do pedido já existe.");
  }

  if (quantidade < 1) {
    throw new Error("A quantidade deve ser maior ou igual a 1.");
  }

  if (valorUnitario <= 0) {
    throw new Error("O valor unitário deve ser maior que 0.");
  }

  const pedido = { numeroPedido, nomePrato, quantidade, valorUnitario };
  pedidos.push(pedido);
  return pedidos.at(-1);
}
