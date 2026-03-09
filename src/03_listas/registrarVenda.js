/*
Desafio: Registrar Venda (sistema de vendas)
Entradas: numeroDaVenda, nomeDoCliente, valorDaVenda, formaDePagamento
Processamento: validar número único, valor > 0, forma de pagamento permitida
Saída: retornar último registro de venda
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
