/**
 * Desafio: Gerenciar Controle de Despesa
 *
 * Descrição:
 * Mantém registros de despesas com operações de listar e registrar, retornando
 * a lista ou o último registro criado.
 *
 * Regras:
 * - Validar campos obrigatórios ao registrar (ex.: valor > 0).
 *
 * Entrada:
 * - Para listar: nenhum parâmetro.
 * - Para registrar: objeto com dados da despesa (`descricao`, `valor`, `categoria`).
 *
 * Processamento:
 * - Validar e adicionar registro à lista.
 *
 * Saída:
 * - Lista de despesas ou o último registro adicionado.
 */
const despesas = [
  {
    descricao: "Aluguel",
    valor: 1200,
    categoria: "Moradia",
  },
  {
    descricao: "Mercado",
    valor: 450,
    categoria: "Alimentação",
  },
  {
    descricao: "Internet",
    valor: 100,
    categoria: "Serviços",
  },
  {
    descricao: "Restaurante",
    valor: 250,
    categoria: "Alimentação",
  },
];

export function listarDespesas() {
  const despesasComFormatoDiferente = [];
  despesas.forEach((despesa) => {
    despesasComFormatoDiferente.push(
      `Despesa: ${despesa.descricao} / Valor: R$ ${despesa.valor.toFixed(2)} / Categoria: ${despesa.categoria}`,
    );
  });
  return despesasComFormatoDiferente;
}

export function registrarDespesa({ descricao, valor, categoria }) {
  if (Number.isNaN(Number(valor))) throw new Error('Parâmetro valor inválido: não é um número');

  const novaDespesa = {
    descricao,
    valor: Number(valor),
    categoria,
  };
  despesas.push(novaDespesa);
  return despesas.at(-1);
}
