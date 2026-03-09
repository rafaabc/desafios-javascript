/*
Desafio: Gerenciar Controle de Despesa (listar e registrar)
Entradas: (listar) nenhuma, (registrar) descricao, valor, categoria
Processamento: manter lista de despesas e formatar
Saída: lista formatada / última despesa registrada
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
  const novaDespesa = {
    descricao,
    valor,
    categoria,
  };
  despesas.push(novaDespesa);
  return despesas.at(-1);
}
