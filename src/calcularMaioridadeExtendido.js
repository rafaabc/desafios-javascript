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

