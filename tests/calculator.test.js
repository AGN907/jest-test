const calculator = require('../calculator');

describe('Calculator add method', () => {
  test('Add 1 plus 2 equal 3', () => {
    expect(calculator().add(1, 2)).toBe(3);
  });

  test('Add negative numbers', () => {
    expect(calculator().add(-2, -2)).toBe(-4);
  });

  test('Add negative number to postive number', () => {
    expect(calculator().add(-2, 2)).toBe(0);
  });
});

describe('Calculator subtract method', () => {
  test('Subtract 5 from 10 to equal 5', () => {
    expect(calculator().subtract(10, 5)).toBe(5);
  });

  test('Subtract negative numbers', () => {
    expect(calculator().subtract(-10, -10)).toBe(0);
  });

  test('Subtract negative number from postive number', () => {
    expect(calculator().subtract(10, -5)).toBe(15);
  });
});

describe('Calculator multiply method', () => {
  test('Multiply 2 * 2', () => {
    expect(calculator().multiply(2, 2)).toBe(4);
  });

  test('Multiply negative numbers', () => {
    expect(calculator().multiply(-2, -2)).toBe(4);
  });

  test('Multiply negative number with postive number', () => {
    expect(calculator().multiply(-2, 2)).toBe(-4);
  });
});

describe('Calculator divide method', () => {
  test('Divide 10 by 5', () => {
    expect(calculator().divide(10, 5)).toBe(2);
  });

  test('Divide zero return error', () => {
    expect(() => calculator().divide(10, 0)).toThrow(new Error('Zero division not possible!'));
  });

  test('Divide negative numbers', () => {
    expect(calculator().divide(-10, -5)).toBe(2)
  })

  test('Divide negative number by postive number', () => {
    expect(calculator().divide(-10, 5)).toBe(-2)
  })
});
