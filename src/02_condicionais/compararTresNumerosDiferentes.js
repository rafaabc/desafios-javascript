/**
 * Desafio: Comparador de Três Números
 *
 * Descrição:
 * Recebe três números distintos e retorna uma string com o maior, o meio
 * e o menor, na ordem apropriada.
 *
 * Regras:
 * - Os números devem ser diferentes entre si.
 * - Retornar no formato: "Maior: X, Meio: Y, Menor: Z."
 *
 * Entrada:
 * - `n1`, `n2`, `n3`: números
 *
 * Processamento:
 * - Comparar pares de números para determinar maior/meio/menor.
 *
 * Saída:
 * - String: "Maior: X, Meio: Y, Menor: Z."
 */
export function compararTresNumerosDiferentes(num1, num2, num3) {
  [["num1", num1], ["num2", num2], ["num3", num3]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const n1 = Number(num1);
  const n2 = Number(num2);
  const n3 = Number(num3);

  if (n1 === n2 || n1 === n3 || n2 === n3) throw new Error("Os números devem ser diferentes entre si");

  const maior = Math.max(n1, n2, n3);
  const menor = Math.min(n1, n2, n3);
  const meio = n1 + n2 + n3 - maior - menor;
  return `Maior: ${maior}, Meio: ${meio}, Menor: ${menor}.`;
}
