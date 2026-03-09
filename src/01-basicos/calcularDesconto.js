export function calcularDesconto(valorDoProduto, porcentagemDoDesconto) {
  const valorDoDesconto = (porcentagemDoDesconto / 100) * valorDoProduto;
  const valorComDesconto = valorDoProduto - valorDoDesconto;

  return `O valor do desconto é de R$ ${valorDoDesconto} e o preço final a pagar é de R$ ${valorComDesconto}.`;
}
