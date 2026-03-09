/*
Desafio: Gerenciar Estoque (listar e registrar produtos)
Entradas: (listar) nenhuma, (registrar) nome, quantidade, preco
Processamento: manter lista de produtos, validar entrada
Saída: lista formatada / último produto registrado
*/
const produtos = [
  {
    nome: "Arroz",
    quantidade: 50,
    preco: 25,
  },
  {
    nome: "Feijão",
    quantidade: 30,
    preco: 8.5,
  },
  {
    nome: "Macarrão",
    quantidade: 45,
    preco: 4.2,
  },
];

export function listarProdutos() {
  const produtosComFormatoDiferente = [];
  produtos.forEach((produto) => {
    produtosComFormatoDiferente.push(
      `Produto: ${produto.nome} / Estoque: ${produto.quantidade} / Preço: R$ ${produto.preco.toFixed(2)}`,
    );
  });
  return produtosComFormatoDiferente;
}

export function registrarProduto({ nome, quantidade, preco }) {
  const novoProduto = {
    nome,
    quantidade,
    preco,
  };
  produtos.push(novoProduto);
  return produtos.at(-1);
}
