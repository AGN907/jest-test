const caesarCipher = require('../caesarCipher');

describe('Caesar cipher function', () => {
  test('Change character by shiftfactor', () => {
    expect(caesarCipher('a', 4)).toBe('e');
  });
  test('Keep character case', () => {
    expect(caesarCipher('A', 4)).toBe('E');
  });
  test('Change more than one character', () => {
    expect(caesarCipher('ab', 4)).toBe('ef');
  });

  test('Change more than one word', () => {
    expect(caesarCipher('abcd abcd', 4)).toBe('efgh efgh');
  });

  test('Don\'t change punctuation', () => {
    expect(caesarCipher('abcd@#_-+=', 4)).toBe('efgh@#_-+=');
  });

  test('No shiftFactor throw error', () => {
    expect(() => caesarCipher('abcd')).toThrow(new Error('Please provide a shift factor!'));
  });

  test('Character wrap', () => {
    expect(caesarCipher('zzzz', 4)).toBe('dddd');
  });

  test('UpperCase character wrap', () => {
    expect(caesarCipher('ZZZZ', 4)).toBe('DDDD');
  });
});
