/*
Desafio: Registrar Contas a Pagar
Entradas: numeroConta, descricao, valor, dataVencimento (1-31)
Processamento: validar número único, valor >0, data entre 1 e 31
Saída: retornar último registro
*/
const contasAPagar = [];

export function registrarContasAPagar({
  numeroConta,
  descricao,
  valor,
  dataVencimento,
}) {
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
