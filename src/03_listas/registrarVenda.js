/*
Desafio: Registrar Venda (sistema de vendas)
Entradas: numeroDaVenda, nomeDoCliente, valorDaVenda, formaDePagamento
Processamento: validar número único, valor > 0, forma de pagamento permitida
Saída: retornar último registro de venda
/**
 * Desafio: Registrar Venda
 *
 * Descrição:
 * Registra vendas garantindo número único, valor válido e forma de pagamento
 * aceita, retornando o último registro cadastrado.
 *
 * Regras:
 * - `numeroVenda` não pode se repetir.
 * - `valor` deve ser > 0.
 * - `formaPagamento` deve ser um dos: dinheiro, débito, crédito, pix.
 *
 * Entrada:
 * - `numeroVenda`, `valor`, `formaPagamento` (dados da venda)
 *
 * Processamento:
 * - Validar duplicidade e valores; adicionar venda à lista.
 *
 * Saída:
 * - Retorna o último registro de venda.
 */
const vendas = [];

export function registrarVenda({ numeroDaVenda, nomeDoCliente, valorDaVenda, formaDePagamento }) {
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
    throw new Error("A forma de pagamento deve ser: Dinheiro, Débito, Crédito ou PIX");
  }

  const venda = { numeroDaVenda, nomeDoCliente, valorDaVenda, formaDePagamento };
  vendas.push(venda);
  return vendas.at(-1);
}
