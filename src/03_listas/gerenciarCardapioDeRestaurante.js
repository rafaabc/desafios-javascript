/**
 * Desafio: Gerenciar Cardápio de Restaurante
 *
 * Descrição:
 * Permite listar pratos e registrar novos itens no cardápio, mantendo uma
 * lista em memória e retornando o último prato cadastrado quando aplicável.
 *
 * Regras:
 * - Evitar duplicação de identificadores quando aplicável.
 *
 * Entrada:
 * - Para listar: nenhuma.
 * - Para registrar: objeto com dados do prato (`nome`, `preco`, `calorias`).
 *
 * Processamento:
 * - Adicionar novo prato à lista, aplicar validações básicas.
 *
 * Saída:
 * - Lista de pratos ou o último prato registrado.
 */
const cardapio = [
  {
    nome: "Feijoada",
    preco: 35,
    calorias: 850,
  },
  {
    nome: "Lasanha",
    preco: 28,
    calorias: 650,
  },
  {
    nome: "Salada Caesar",
    preco: 22,
    calorias: 320,
  },
];

export function listarPratos() {
  const pratosComFormatoDiferente = [];
  cardapio.forEach((prato) => {
    pratosComFormatoDiferente.push(
      `Prato: ${prato.nome} / Preço: R$ ${prato.preco.toFixed(2)} / Calorias: ${prato.calorias}`,
    );
  });
  return pratosComFormatoDiferente;
}

export function registrarPrato({ nome, preco, calorias }) {
  const novoPrato = {
    nome,
    preco,
    calorias,
  };
  cardapio.push(novoPrato);
  return cardapio.at(-1);
}
