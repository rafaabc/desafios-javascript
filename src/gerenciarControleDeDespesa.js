/*
Desafio 5: Sistema de Controle de Despesas
Parte A - Listar Despesas
Você possui uma lista de despesas do mês:

Aluguel: R$ 1200.00, categoria "Moradia"
Mercado: R$ 450.00, categoria "Alimentação"
Internet: R$ 100.00, categoria "Serviços"
Restaurante: R$ 250.00, categoria "Alimentação"

Crie uma função que liste todas as despesas.
Entrada

N/A (a lista já está cadastrada)

Processamento

Percorrer a lista de despesas
Formatar cada despesa no padrão: "Despesa: Aluguel / Valor: R$ 1200.00 / Categoria: Moradia"

Saída

Lista com todas as despesas formatadas

Parte B - Adicionar Despesa
Crie uma função que adicione uma nova despesa à lista.
Entrada

Descrição da despesa
Valor da despesa
Categoria da despesa

Processamento

Adicionar a descrição, valor e categoria como um novo item da lista

Saída

A última despesa da lista
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
