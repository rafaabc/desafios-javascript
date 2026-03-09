export function calcularDivisaoDeConta(valorTotalConta, quantidadeDePessoas) {
  const resultado = valorTotalConta / quantidadeDePessoas;

  return `Cada pessoa deve pagar R$ ${resultado}.`;
}
