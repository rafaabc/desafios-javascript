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
export function compararTresNumerosDiferentes(n1, n2, n3) {
  let maior, meio, menor;

  if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
      meio = n2;
      menor = n3;
    } else {
      meio = n3;
      menor = n2;
    }
  } else if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
      meio = n1;
      menor = n3;
    } else {
      meio = n3;
      menor = n1;
    }
  } else {
    maior = n3;
    if (n1 > n2) {
      meio = n1;
      menor = n2;
    } else {
      meio = n2;
      menor = n1;
    }
  }

  return `Maior: ${maior}, Meio: ${meio}, Menor: ${menor}.`;
}
