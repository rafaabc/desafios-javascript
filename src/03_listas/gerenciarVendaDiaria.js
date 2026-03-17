/**
 * Desafio: Gerenciar Venda Diaria
 *
 * Descrição:
 * Mantém registros das vendas diárias com operações para listar e inserir
 * novas vendas, retornando o último registro cadastrado.
 *
 * Regras:
 * - Validar integridade dos dados (ex.: valor > 0, forma de pagamento válida).
 *
 * Entrada:
 * - Para listar: nenhuma.
 * - Para registrar: objeto com dados da venda (`numero`, `valor`).
 *
 * Processamento:
 * - Validar e adicionar à lista de vendas.
 *
 * Saída:
 * - Lista de vendas ou o último registro adicionado.
 */
const vendas = [
  {
    numero: 1,
    valor: 150,
  },
  {
    numero: 2,
    valor: 85.5,
  },
  {
    numero: 3,
    valor: 220,
  },
  {
    numero: 4,
    valor: 95,
  },
];

export function listarVendas() {
  const vendasComFormatoDiferente = [];
  vendas.forEach((venda) => {
    vendasComFormatoDiferente.push(
      `Venda ${venda.numero}: R$ ${venda.valor.toFixed(2)}`,
    );
  });
  return vendasComFormatoDiferente;
}

export function registrarVenda({ numero, valor }) {
  [["numero", numero], ["valor", valor]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const novaVenda = { numero: Number(numero), valor: Number(valor) };
  vendas.push(novaVenda);
  return vendas.at(-1);
}
