function analyzeArray(array) {
  if (!array) throw new Error('Please provide an array to analyze!')

  function average() {
    return array.reduce((prev, cur) => prev + cur, 0) / array.length;
  }

  function min() {
    return array.reduce((previous, current) => {
      if (current < previous) {
        previous = current
      }
      return previous
    }, 10)
  }

  function max() {
    return array.reduce((previous, current) => {
      if (current > previous) {
        previous = current
      }
      return previous

    }, 0)
  }


  return {
    average: average(),
    length: array.length,
    max: max(),
    min: min()
  }
}


module.exports = analyzeArray
