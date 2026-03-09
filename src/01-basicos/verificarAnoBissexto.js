export function verificarAnoBissexto(ano) {
  const divisivelPor4 = ano % 4 == 0;
  const divisivelPor100 = ano % 100 == 0;
  const divisivelPor400 = ano % 400 == 0;

  if (divisivelPor400) {
    return `O ano ${ano} é bissexto.`;
  } else if (divisivelPor100) {
    return `O ano ${ano} não é bissexto.`;
  } else if (divisivelPor4) {
    return `O ano ${ano} é bissexto.`;
  } else {
    return `O ano ${ano} não é bissexto.`;
  }
}
