export function calcularMaioridade(anoAtual, anoNascimento) {
  const idade = anoAtual - anoNascimento;

  if (idade >= 18) {
    return "Sua idade é de " + idade + " anos. Você é maior de idade.";
  } else {
    return "Sua idade é de " + idade + " anos. Você é menor de idade.";
  }
}