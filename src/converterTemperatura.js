export function converterTemperatura(temperaturaCelsius) {
  const temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
  const temperaturaKelvin = temperaturaCelsius + 273.15;

  return `${temperaturaCelsius}º Celsius equivalem a ${temperaturaFahrenheit} Fahrenheit e ${temperaturaKelvin} Kelvin.`;
}