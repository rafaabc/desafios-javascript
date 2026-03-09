/*
Desafio: Comparador de Três Números
Entradas: três números diferentes
Processamento: identificar maior, menor e meio
Saída: string com maior, meio e menor
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
