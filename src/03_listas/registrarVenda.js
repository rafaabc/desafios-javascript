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
  [["numeroDaVenda", numeroDaVenda], ["valorDaVenda", valorDaVenda]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const numeroNum = Number(numeroDaVenda);
  const valorNum = Number(valorDaVenda);

  if (vendas.some((v) => Number(v.numeroDaVenda) === numeroNum)) throw new Error("O número da venda não pode se repetir");
  if (valorNum <= 0) throw new Error("O valor deve ser maior que 0");

  const formasValidas = ["Dinheiro", "Débito", "Crédito", "PIX"];
  if (!formasValidas.includes(formaDePagamento)) throw new Error("A forma de pagamento deve ser: Dinheiro, Débito, Crédito ou PIX");

  const venda = { numeroDaVenda: numeroNum, nomeDoCliente, valorDaVenda: valorNum, formaDePagamento };
  vendas.push(venda);
  return vendas.at(-1);
}
