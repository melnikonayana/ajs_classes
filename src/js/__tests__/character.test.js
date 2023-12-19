import Character from "../classes/character";
test('Need to create a class object Character', () => {
  expect(new Character('Test', 'Bowman')).toBeDefined();
});

test('If the name is not a string, an error is thrown', () => {
  expect(() => new Character(5, 'Bowman')).toThrow('Name must be a string');
});

test('Name length error', () => {
  expect(() => new Character('M', 'Bowman')).toThrow('The name must be between 2 and 10 characters long');
  expect(() => new Character('Akakij Akakievich', 'Bowman')).toThrow('The name must be between 2 and 10 characters long');
})

test('Selecting a non-existent class', () => {
  expect(() => new Character('Test', 'God')).toThrow('There is no such hero');
})
