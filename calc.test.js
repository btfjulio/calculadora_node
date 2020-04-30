// para escrever testes com jest, vc usa o metodo describe
// 

const calculadora = require("./calc")

describe('calculadora', () => {
    it('teste exemplo', () => {
        const numOne = 23
        const numTwo = 7
        expect(23 + 7).toBe(30)
        expect(23 + 7).not.toBe(31);
    })
})


describe("soma", () => {
  it("retorna 3 quando 2 é somado com 1", () => {
    const num1 = 2
    const num2 = 1;
    expect(calculadora.soma(num1,num2)).toBe(3);
  });
});


describe("subtração", () => {
  it("retorna 1 quando 2 é subtraido por 1", () => {
    const num1 = 2;
    const num2 = 1;
    expect(calculadora.subtracao(num1, num2)).toBe(1);
  });
});


describe("multiplicação", () => {
  it("retorna 6 quando 2 é multiplicado por 3", () => {
    const num1 = 2;
    const num2 = 3;
    expect(calculadora.multiplicacao(num1, num2)).toBe(6);
  });
});

describe("divisão", () => {
  it("retorna 2 quando 6 é dividido por 3", () => {
    const num1 = 6;
    const num2 = 3;
    expect(calculadora.divisao(num1, num2)).toBe(2);
  });

  it("não pode dividir por 0", () => {
    const num1 = 6;
    const num2 = 0;
    expect(calculadora.divisao(num1, num2)).toBe(
      "Erro, não pode dividir por 0"
    );  
  });
});
