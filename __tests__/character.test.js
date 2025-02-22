import Character from '../src/character';
import Bowman from '../src/bowman';

test('Valid name and type', () => {
  const bowman = new Bowman('Luchnick');
  expect(bowman.name).toBe('Luchnick');
  expect(bowman.type).toBe('Bowman');
});

test('Invalid name', () => {
  expect(() => new Bowman('L')).toThrow('Имя должно быть от 2 до 10 символов');
});

test('levelUp works correctly', () => {
  const bowman = new Bowman('Luchnick');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
});