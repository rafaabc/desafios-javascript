/**
 * Desafio: Calcular valor do ingresso por faixa etária
 *
 * Descrição:
 * Dada a idade, retorne uma mensagem indicando a idade e o valor do
 * ingresso conforme as regras:
 * - < 6 anos: gratuito
 * - 6 a 12 anos: meia (50% do inteiro)
 * - 13 a 59 anos: inteira
 * - >= 60 anos: meia
 *
 * Regras:
 * - `idade` é um número inteiro não-negativo.
 * - Valor inteiro fixo: R$ 30.
 * - Retornar exatamente as strings com a idade e o valor ou indicação de
 *   gratuidade conforme o enunciado.
 *
 * Entrada:
 * - `idade`: número inteiro (anos)
 *
 * Processamento:
 * - Determinar faixa etária e aplicar regra de preço (inteira/meia/gratuito).
 *
 * Saída:
 * - String com idade e texto sobre valor/gratuidade conforme enunciado.
 */
export function calcularIngresso(idade) {
  const valorInteira = 30;
  const valorMeia = valorInteira / 2;

  if (idade >= 0 && idade < 6) {
    return `Você tem ${idade} anos. O ingresso é gratuito.`;
  } else if (idade >= 6 && idade < 13) {
    return `Você tem ${idade} anos. O valor do ingresso é de R$ ${valorMeia}.`;
  } else if (idade >= 13 && idade < 60) {
    return `Você tem ${idade} anos. O valor do ingresso é de R$ ${valorInteira}.`;
  } else {
    return `Você tem ${idade} anos. O valor do ingresso é de R$ ${valorMeia}.`;
  }
}
