export function calcularIMC(pesoEmKilogramas, alturaEmMetros) {
  const resultadoIMC = Math.round(pesoEmKilogramas / alturaEmMetros ** 2);

  return `O IMC é de ${resultadoIMC}.`;
}