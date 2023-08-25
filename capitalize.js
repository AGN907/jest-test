function capitalize(string) {
  const splitedString = string.split("");
  return splitedString[0].toUpperCase() + splitedString.slice(1).join('').toLowerCase()
}

module.exports = capitalize
