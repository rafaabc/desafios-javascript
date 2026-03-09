export function calcularGorjeta(valorConta, porcentagem) {
  const gorjeta = (porcentagem / 100) * valorConta;
  const valorFinal = valorConta + gorjeta;

  return "Gorjeta: R$ " + gorjeta + " / Valor Final: R$ " + valorFinal + ".";
}
