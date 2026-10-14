const { multiplicar, dividir } = require("./calculadora");

/* --------- SOMA ------------- */
/* Somar dois números positivos */
/* Somar com números negativos  */


/* ------ SUBTRAIR ------ */
/* Subitrair dois números */


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