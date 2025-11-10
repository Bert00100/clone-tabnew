const calculadora = require("../model/calculadora");

test("A soma de 2 mais 2 deve dar 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("A soma de banana + 101 deve dar Error", () => {
  expect(calculadora.somar("banana" + 101)).toBe("Error");
});

test("A soma de Mamao + 101 deve dar Error", () => {
  expect(calculadora.somar("Mamao" + 101)).toBe("Error");
});
