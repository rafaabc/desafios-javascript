/*
Desafio: Registrar Veículo
Entradas: placa, modelo, ano, preco
Processamento: validar placa única, ano entre 2000 e 2026, preço mínimo
Saída: retornar último veículo cadastrado
/**
 * Desafio: Registrar Veículo
 *
 * Descrição:
 * Registra veículos validando placa, ano e preço, e retorna o último
 * veículo cadastrado.
 *
 * Regras:
 * - Placa não pode se repetir.
 * - Ano deve estar dentro de limites válidos (ex.: >= 2000 e <= 2026).
 * - Preço deve ser maior que um mínimo (ex.: 10000).
 *
 * Entrada:
 * - `placa`, `modelo`, `ano`, `preco` (dados do veículo)
 *
 * Processamento:
 * - Validar campos e inserir veículo na lista.
 *
 * Saída:
 * - Retorna o último veículo registrado.
 */
const veiculos = [];

export function registrarVeiculo({ placa, modelo, ano, preco }) {
  if (veiculos.some((v) => v.placa === placa)) {
    throw new Error("A placa não pode se repetir");
  }
  [["ano", ano], ["preco", preco]].forEach(([name, v]) => {
    if (Number.isNaN(Number(v))) throw new Error(`Parâmetro ${name} inválido: não é um número`);
  });
  const anoNum = Number(ano);
  const precoNum = Number(preco);

  if (anoNum < 2000 || anoNum > 2026) throw new Error("O ano deve ser maior ou igual a 2000 e menor ou igual a 2026");
  if (precoNum < 10000) throw new Error("O preço deve ser maior ou igual a 10000");

  const veiculo = { placa, modelo, ano: anoNum, preco: precoNum };
  veiculos.push(veiculo);
  return veiculos.at(-1);
}
