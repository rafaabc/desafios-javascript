/**
 * Desafio: Gerenciar Estoque
 *
 * Descrição:
 * Mantém uma lista de produtos em estoque com operações para listar e
 * registrar novos produtos, retornando o último produto cadastrado.
 *
 * Regras:
 * - Validar dados essenciais ao cadastrar (ex.: código, preço).
 *
 * Entrada:
 * - Para listar: nenhuma entrada.
 * - Para registrar: objeto com dados do produto.
 *
 * Processamento:
 * - Validar e inserir produto na lista.
 *
 * Saída:
 * - Lista de produtos ou o último produto registrado.
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
  [["quantidade", quantidade], ["preco", preco]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const novoProduto = { nome, quantidade: Number(quantidade), preco: Number(preco) };
  produtos.push(novoProduto);
  return produtos.at(-1);
}
