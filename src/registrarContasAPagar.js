/*
Desafio 9: Sistema de Registro de Contas a Pagar
Você precisa criar uma função capaz de registrar contas a pagar de uma empresa.
Cada conta possui as seguintes informações: número da conta, descrição, valor e data de vencimento (dia do mês).
Regras de validação:

O número da conta não pode se repetir
A descrição pode ser repetida
O valor deve ser maior que 0
A data de vencimento deve ser entre 1 e 31

Ao final, a função deve retornar:

o último registro de contas a pagar
*/
const contasAPagar = [];

export function registrarContasAPagar({
  numeroConta,
  descricao,
  valor,
  dataVencimento,
}) {
  // Verificar se o número da conta já existe
  if (contasAPagar.some((conta) => conta.numeroConta === numeroConta)) {
    throw new Error("Número da conta já existe");
  }

  if (valor <= 0) {
    throw new Error("O valor deve ser maior que 0");
  }

  if (dataVencimento < 1 || dataVencimento > 31) {
    throw new Error("A data de vencimento deve ser entre 1 e 31");
  }

  const conta = {
    numeroConta,
    descricao,
    valor,
    dataVencimento,
  };

  contasAPagar.push(conta);

  return contasAPagar.at(-1);
}
