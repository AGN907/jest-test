const capitalize = require('./capitalize');

test('return the string', () => {
  expect(capitalize('chair')).toBe('Chair');
});

test('return first character capitalized', () => {
  expect(capitalize('table')).toBe('Table');
});

test('non first character upper case to lower', () => {
  expect(capitalize('tAbLe')).toBe('Table');
});

test('Multiple words', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('non word characters', () => {
  expect(capitalize('hello world@!')).toBe('Hello world@!');
});
