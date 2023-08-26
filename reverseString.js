function reverseString(string) {
  const splitedString = string.split('')
  return splitedString.reverse().join('')
}

module.exports = reverseString
