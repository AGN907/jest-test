const reverseString = require('../reverseString');

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Upper case', () => {
  expect(reverseString('HellO')).toBe('OlleH');
});

test('Multiple words', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Non word characters', () => {
  expect(reverseString('hel@lo ! w0orld?')).toBe('?dlro0w ! ol@leh')
})
