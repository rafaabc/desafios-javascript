export function verificarNumero(n) {
  if (n < 0) {
    return `${n} é um número negativo.`;
  } else if (n == 0) {
    return `${n} é igual a 0.`;
  } else {
    return `${n} é um número positivo.`;
  }
}
