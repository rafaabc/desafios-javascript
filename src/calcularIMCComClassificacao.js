export function calcularIMCComClassificacao(pesoEmKilogramas, alturaEmMetros) {
  const resultadoIMC = Math.round(pesoEmKilogramas / alturaEmMetros ** 2);

  if (resultadoIMC < 18.5) {
    return `O IMC é de ${resultadoIMC}. Abaixo do peso.`;
  } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
    return `O IMC é de ${resultadoIMC}. Peso normal.`;
  } else if (resultadoIMC >= 25 && resultadoIMC < 30) {
    return `O IMC é de ${resultadoIMC}. Sobrepeso.`;
  } else {
    return `O IMC é de ${resultadoIMC}. Obeso.`;
  }
}
