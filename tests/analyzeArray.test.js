const analyzeArray = require('../analyzeArray')
let fakeArray = [1, 8, 3, 4, 2, 6];

describe('Analyze an array and return the average, min, max and length', () => {
  test('Throw an error if no array was provided', () => {
    expect(() => analyzeArray()).toThrow(new Error('Please provide an array to analyze!'))
  })

  test('return an object', () => {
    expect(analyzeArray(fakeArray)).toBeInstanceOf(Object)
  })


  test('return an object with average', () => {
    expect(analyzeArray(fakeArray)).toHaveProperty('average', 4)
  })

  test('return an object with length', () => {
    expect(analyzeArray(fakeArray)).toHaveProperty('length', fakeArray.length)
  })

  test('return an object with min', () => {
    expect(analyzeArray(fakeArray)).toHaveProperty('min', 1)
  })

  test('return an object with max', () => {
    expect(analyzeArray(fakeArray)).toHaveProperty('max', 8)
  })


  test('return an object with average, min, max and length', () => {
    expect(analyzeArray(fakeArray)).toStrictEqual({ average: 4, length: fakeArray.length, max: 8, min: 1 })
  })
})
