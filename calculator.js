function calculator() {
  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  function multiply(a, b) {
    return a * b
  }

  function divide(a, b) {
    if (a === 0 || b === 0) throw new Error('Zero division not possible!')
    return a / b
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  }
}


module.exports = calculator
