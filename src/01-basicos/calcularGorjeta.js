/**
 * Desafio: Calcular gorjeta e valor final da conta
 *
 * Descrição:
 * Dado o valor da conta e a porcentagem de gorjeta, calcule o valor da
 * gorjeta e o valor final (conta + gorjeta). Retorne a string no formato:
 * "Gorjeta: R$ G / Valor Final: R$ V." onde G é o valor da gorjeta e V o total.
 *
 * Regras:
 * - `valorConta` e `porcentagem` são números.
 * - Porcentagem é usada como (porcentagem / 100) * valorConta.
 * - Retornar exatamente o formato de string especificado.
 *
 * Entrada:
 * - `valorConta`: número (R$)
 * - `porcentagem`: número (0-100)
 *
 * Processamento:
 * - Calcular `gorjeta = (porcentagem / 100) * valorConta`.
 * - `valorFinal = valorConta + gorjeta`.
 *
 * Saída:
 * - String: "Gorjeta: R$ G / Valor Final: R$ V." (valores numéricos substituídos)
 */
export function calcularGorjeta(valorConta, porcentagem) {
  const gorjeta = (porcentagem / 100) * valorConta;
  const valorFinal = valorConta + gorjeta;

  return "Gorjeta: R$ " + gorjeta + " / Valor Final: R$ " + valorFinal + ".";
}
