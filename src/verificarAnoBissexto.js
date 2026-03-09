export function verificarAnoBissexto(ano) {
  // Desafio 10: Verificador de Ano Bissexto
  // Um ano é bissexto se:
  // - For divisível por 4, EXCETO
  // - Se for divisível por 100 (a menos que também seja divisível por 400)

  const divisivelPor4 = ano % 4 == 0;
  const divisivelPor100 = ano % 100 == 0;
  const divisivelPor400 = ano % 400 == 0;

  // Se é divisível por 400, é bissexto
  if (divisivelPor400) {
    return `O ano ${ano} é bissexto.`;
  }
  // Senão, se é divisível por 100, não é bissexto
  else if (divisivelPor100) {
    return `O ano ${ano} não é bissexto.`;
  }
  // Senão, se é divisível por 4, é bissexto
  else if (divisivelPor4) {
    return `O ano ${ano} é bissexto.`;
  }
  // Caso contrário, não é bissexto
  else {
    return `O ano ${ano} não é bissexto.`;
  }
}
