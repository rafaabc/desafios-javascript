export function calcularDescontoProgressivo(valorDoProduto) {
  if (valorDoProduto >= 0.01 && valorDoProduto < 100.01) {
    const valorComDesconto = valorDoProduto;
    return `Valor original: R$ ${valorDoProduto}, Desconto aplicado: 0% e Valor final a pagar: R$ ${valorComDesconto}.`;
  } else if (valorDoProduto >= 100.01 && valorDoProduto < 500.01) {
    const desconto = 10;
    const valorDoDesconto = (desconto / 100) * valorDoProduto;
    const valorComDesconto = valorDoProduto - valorDoDesconto;
    return `Valor original: R$ ${valorDoProduto}, Desconto aplicado: ${desconto}% e Valor final a pagar: R$ ${valorComDesconto}.`;
  } else {
    const desconto = 20;
    const valorDoDesconto = (desconto / 100) * valorDoProduto;
    const valorComDesconto = valorDoProduto - valorDoDesconto;
    return `Valor original: R$ ${valorDoProduto}, Desconto aplicado: ${desconto}% e Valor final a pagar: R$ ${valorComDesconto}.`;
  }
}
