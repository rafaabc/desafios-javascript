/*
Desafio: Registrar Pedido de Restaurante
Entradas: numeroPedido, nomePrato, quantidade, valorUnitario
Processamento: validar número único, quantidade >=1, valorUnitario >0
Saída: retornar último pedido cadastrado
*/
const pedidos = [];

export function registrarPedido({
  numeroPedido,
  nomePrato,
  quantidade,
  valorUnitario,
}) {
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
