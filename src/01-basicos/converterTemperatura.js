/**
 * Desafio: Converter temperatura de Celsius para Fahrenheit e Kelvin
 *
 * Descrição:
 * Dada uma temperatura em graus Celsius, calcule a equivalente em
 * Fahrenheit e Kelvin e retorne a string:
 * "Cº Celsius equivalem a F Fahrenheit e K Kelvin.".
 *
 * Regras:
 * - `temperaturaCelsius` é um número (pode ser negativo).
 * - Fahrenheit = Celsius * 1.8 + 32.
 * - Kelvin = Celsius + 273.15.
 * - Retornar exatamente a string no formato especificado.
 */
export function converterTemperatura(temperaturaCelsius) {
  const temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
  const temperaturaKelvin = temperaturaCelsius + 273.15;

  return `${temperaturaCelsius}º Celsius equivalem a ${temperaturaFahrenheit} Fahrenheit e ${temperaturaKelvin} Kelvin.`;
}
