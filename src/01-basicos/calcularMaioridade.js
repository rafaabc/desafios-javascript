/**
 * Desafio: Determinar maioridade com base no ano de nascimento
 *
 * Descrição:
 * Dados o ano atual e o ano de nascimento, calcule a idade e retorne uma
 * mensagem indicando a idade e se a pessoa é maior de idade (>= 18 anos).
 *
 * Regras:
 * - `anoAtual` e `anoNascimento` são números inteiros.
 * - Idade = anoAtual - anoNascimento.
 * - Considere maior de idade quem tiver idade >= 18.
 * - Retornar exatamente a string no formato: "Sua idade é de X anos. Você é ..."
 *
 * Entrada:
 * - `anoAtual`: número inteiro
 * - `anoNascimento`: número inteiro
 *
 * Processamento:
 * - Calcular `idade = anoAtual - anoNascimento`.
 * - Comparar `idade >= 18` para decidir maioridade.
 *
 * Saída:
 * - String: "Sua idade é de X anos. Você é maior de idade." ou "... menor de idade."
 */
export function calcularMaioridade(anoAtual, anoNascimento) {
  [["anoAtual", anoAtual], ["anoNascimento", anoNascimento]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const idade = Number(anoAtual) - Number(anoNascimento);
  if (idade >= 18) return `Sua idade é de ${idade} anos. Você é maior de idade.`;
  return `Sua idade é de ${idade} anos. Você é menor de idade.`;
}
