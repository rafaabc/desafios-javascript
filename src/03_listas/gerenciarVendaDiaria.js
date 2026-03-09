/*
Desafio: Gerenciar Vendas Diárias (listar e registrar)
Entradas: (listar) nenhuma, (registrar) numero, valor
Processamento: manter lista de vendas e formatar saída
Saída: lista formatada / última venda registrada
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
  const novaVenda = {
    numero,
    valor,
  };
  vendas.push(novaVenda);
  return vendas.at(-1);
}
