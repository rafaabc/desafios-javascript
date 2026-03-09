/*
Desafio: Registrar Contas a Pagar

Descrição:
Registra contas a pagar aplicando validações (número único, valor e data
de vencimento) e retorna o último registro cadastrado.

Regras:
- `numeroConta` deve ser único.
- `valor` deve ser maior que 0.
- `dataVencimento` deve estar entre 1 e 31.

Entrada:
- Objeto com `numeroConta`, `descricao`, `valor`, `dataVencimento`.

Processamento:
- Validar campos e adicionar o registro à lista.

Saída:
- Retorna o último registro adicionado.
*/

const contasAPagar = [];

export function registrarContasAPagar({ numeroConta, descricao, valor, dataVencimento }) {
  if (contasAPagar.some((conta) => conta.numeroConta === numeroConta)) {
    throw new Error("Número da conta já existe");
  }

  if (valor <= 0) {
    throw new Error("O valor deve ser maior que 0");
  }

  if (dataVencimento < 1 || dataVencimento > 31) {
    throw new Error("A data de vencimento deve ser entre 1 e 31");
  }

  const conta = { numeroConta, descricao, valor, dataVencimento };
  contasAPagar.push(conta);
  return contasAPagar.at(-1);
}
