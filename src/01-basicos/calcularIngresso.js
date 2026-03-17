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
  [["idade", idade]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });

  const idadeNum = Number(idade);
  const valorInteira = 30;
  const valorMeia = valorInteira / 2;
  const regras = [
    { min: 0, max: 5, texto: `Você tem ${idadeNum} anos. O ingresso é gratuito.` },
    { min: 6, max: 12, texto: `Você tem ${idadeNum} anos. O valor do ingresso é de R$ ${valorMeia}.` },
    { min: 13, max: 59, texto: `Você tem ${idadeNum} anos. O valor do ingresso é de R$ ${valorInteira}.` },
    { min: 60, max: Infinity, texto: `Você tem ${idadeNum} anos. O valor do ingresso é de R$ ${valorMeia}.` },
  ];

  for (const regra of regras) {
    if (idadeNum >= regra.min && idadeNum <= regra.max) return regra.texto;
  }
}
