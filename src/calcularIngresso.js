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
