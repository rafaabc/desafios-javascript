import { registrarVeiculo } from "../src/registrarVeiculo.js";
import assert from "node:assert";

describe("Testes do registrarVeiculo", () => {
  it("Quando enviar placa duplicada, deve lançar erro", () => {
    const veiculoComPlacaDuplicada = {
      placa: 132,
      modelo: "Fiat",
      ano: 2020,
      preco: 10000,
    };
    assert.throws(
      () => {
        registrarVeiculo(veiculoComPlacaDuplicada);
        registrarVeiculo(veiculoComPlacaDuplicada);
      },
      { name: "Error", message: "A placa não pode se repetir" },
    );
  });

  it("Quando enviar ano < 2000, deve lançar erro", () => {
    const veiculoComAnoMenorQueDoisMil = {
      placa: 1324,
      modelo: "Fiat",
      ano: 1999,
      preco: 10000,
    };
    assert.throws(
      () => {
        registrarVeiculo(veiculoComAnoMenorQueDoisMil);
      },
      {
        name: "Error",
        message: "O ano deve ser maior ou igual a 2000 e menor ou igual a 2026",
      },
    );
  });

  it("Quando enviar ano > 2026, deve lançar erro", () => {
    const veiculoComAnoMaiorQueDoisMileVinteESeis = {
      placa: 13245,
      modelo: "Fiat",
      ano: 2027,
      preco: 10000,
    };
    assert.throws(
      () => {
        registrarVeiculo(veiculoComAnoMaiorQueDoisMileVinteESeis);
      },
      {
        name: "Error",
        message: "O ano deve ser maior ou igual a 2000 e menor ou igual a 2026",
      },
    );
  });

  it("Quando enviar preço <= 10000, deve lançar erro", () => {
    const veiculoComPrecoInvalido = {
      placa: 13245,
      modelo: "Fiat",
      ano: 2020,
      preco: 9999,
    };
    assert.throws(
      () => {
        registrarVeiculo(veiculoComPrecoInvalido);
      },
      { name: "Error", message: "O preço deve ser maior ou igual a 10000" },
    );
  });

  it("Quando enviar veiculo com dados válidos, deve retornar o último veículo", () => {
    const veiculoComDadosValidos = {
      placa: 132456,
      modelo: "Fiat",
      ano: 2020,
      preco: 10000,
    };

    const veiculoRegistrado = registrarVeiculo(veiculoComDadosValidos);
    assert.deepEqual(veiculoRegistrado, {
      placa: 132456,
      modelo: "Fiat",
      ano: 2020,
      preco: 10000,
    });
  });
});
