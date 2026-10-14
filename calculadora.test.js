const { somar, subtrair, multiplicar, dividir } = require("./calculadora");

describe("somar", () => {
  test("soma dois números positivos", () => {
    expect(somar(3, 4)).toBe(7);
  });

  test("somar dois número negativos", () => {
    expect(somar(-5, -2)).toBe(-7);
  });
});

describe("subtrair", () => {
  test("subtrai dois números", () => {
    expect(subtrair(10, 4)).toBe(6);
  });


});


describe("multiplicar", () => {
  test("multiplica dois números", () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test("qualquer número vezes zero é zero", () => {
    expect(multiplicar(5, 0)).toBe(0);
  });
});

describe("dividir", () => {
  test("divide dois números", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("lança erro ao dividir por zero", () => {
    expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
  });
});