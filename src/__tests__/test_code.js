import lifeLine from '../code';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Фея', health: 45 }, 'wounded'],
  [{ name: 'Злодей', health: 10 }, 'critical'],
])('testing character %s with health %i', (character, status) => {
  const result = lifeLine(character);
  expect(result).toBe(status);
});
