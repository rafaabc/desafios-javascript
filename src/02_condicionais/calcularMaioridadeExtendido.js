/**
 * Desafio: Verificador de Maioridade Estendida (categorias)
 *
 * Descrição:
 * Classifica a idade informada em categorias: criança, adolescente,
 * adulto ou idoso, retornando uma frase com a categoria.
 *
 * Regras:
 * - Criança: 0 <= idade < 13
 * - Adolescente: 13 <= idade < 18
 * - Adulto: 18 <= idade < 60
 * - Idoso: idade >= 60
 *
 * Entrada:
 * - `idade`: número inteiro (anos)
 *
 * Processamento:
 * - Verificar intervalos e escolher a categoria correspondente.
 *
 * Saída:
 * - String informando a categoria, ex: "Sua idade é N. Você é adulto."
 */
export function calculoMaioridadeExtendido(idade) {
  if (idade >= 0 && idade < 13) {
    return `Sua idade é ${idade}. Você é criança.`;
  } else if (idade >= 13 && idade < 18) {
    return `Sua idade é ${idade}. Você é adolescente.`;
  } else if (idade >= 18 && idade < 60) {
    return `Sua idade é ${idade}. Você é adulto.`;
  } else {
    return `Sua idade é ${idade}. Você é idoso.`;
  }
}
