export function calcularParOuImpar(numero) {
  const restoDaDivisao = numero % 2;

  if (restoDaDivisao == 0) {
    return `O número ${numero} é par.`;
  } else {
    return `O número ${numero} é ímpar.`;
  }
}
