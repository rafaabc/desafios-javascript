/*
Desafio 2: Sistema de Controle de Estoque
Parte A - Listar Produtos
Você possui uma lista de produtos em estoque:

Arroz: 50 unidades, R$ 25.00
Feijão: 30 unidades, R$ 8.50
Macarrão: 45 unidades, R$ 4.20

Crie uma função que liste todos os produtos.
Entrada
-N/A (a lista já está cadastrada)

Processamento
- Percorrer a lista de produtos
- Formatar cada produto no padrão: "Produto: Arroz / Estoque: 50 / Preço: R$ 25.00"

Saída
- Lista com todos os produtos formatados

Parte B - Adicionar Produto
Crie uma função que adicione um novo produto ao estoque.

Entrada
- Nome do produto
- Quantidade em estoque
- Preço do produto

Processamento
- Adicionar o nome, quantidade e preço como um novo item da lista

Saída
- O último produto da lista
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
