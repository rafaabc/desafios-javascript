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
  [["numeroPedido", numeroPedido], ["quantidade", quantidade], ["valorUnitario", valorUnitario]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const numeroPedidoNum = Number(numeroPedido);
  if (pedidos.some((pedido) => Number(pedido.numeroPedido) === numeroPedidoNum)) throw new Error("Número do pedido já existe.");

  const quantidadeNum = Number(quantidade);
  if (quantidadeNum < 1) throw new Error("A quantidade deve ser maior ou igual a 1.");

  const valorUnitarioNum = Number(valorUnitario);
  if (valorUnitarioNum <= 0) throw new Error("O valor unitário deve ser maior que 0.");

  const pedido = { numeroPedido: numeroPedidoNum, nomePrato, quantidade: quantidadeNum, valorUnitario: valorUnitarioNum };
  pedidos.push(pedido);
  return pedidos.at(-1);
}
