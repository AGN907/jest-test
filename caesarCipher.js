function caesarCipher(string, shiftFactor) {
  if (!shiftFactor) throw Error('Please provide a shift factor!');

  const splitString = string.split('');

  return switchChars(splitString);

  function isUpperCase(char) {
    if (char === char.toUpperCase()) return true;

    return false;
  }

  function getCharCode(char) {
    return char.charCodeAt();
  }

  function codeToChar(code) {
    return String.fromCharCode(code);
  }
  function switchChars(array) {

    return array.map((char) => shiftChar(char)).join('');
  }

  function shiftChar(char) {
    let charCode = getCharCode(char);

    // If char is an alphabetic character
    if (/[A-Za-z]/.test(char)) {
      if (isUpperCase(char)) {
        charCode = (charCode + shiftFactor >= 90) ? (charCode - 26) : charCode;
        return codeToChar(charCode + shiftFactor);
      } else {
        charCode = (charCode + shiftFactor >= 122) ? (charCode - 26) : charCode;
        return codeToChar(charCode + shiftFactor);
      }
      // if char is not an alphabetic character
    } else {
      return char;
    }
  }
}

module.exports = caesarCipher;
