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
  [["idade", idade]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const idadeNum = Number(idade);
  const faixas = [
    { min: 0, max: 12, label: "criança" },
    { min: 13, max: 17, label: "adolescente" },
    { min: 18, max: 59, label: "adulto" },
    { min: 60, max: Infinity, label: "idoso" },
  ];

  for (const faixa of faixas) {
    if (idadeNum >= faixa.min && idadeNum <= faixa.max) return `Sua idade é ${idadeNum}. Você é ${faixa.label}.`;
  }
}
