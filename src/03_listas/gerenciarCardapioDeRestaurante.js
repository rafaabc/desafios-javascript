/*
Desafio: Gerenciar Cardápio de Restaurante (listar e registrar pratos)
Entradas: (listar) nenhuma, (registrar) nome do prato, preco, calorias
Processamento: manter lista e formatar saída
Saída: lista formatada / último prato cadastrado
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
