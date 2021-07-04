import ErrorRepository from '../app';

const repo = new ErrorRepository();

test('add error', () => {
  repo.storage.clear();
  repo.storage.set(111, 'Ошибка 111');
  expect(repo.translate(111)).toBe('Ошибка 111');
});

test('add same error', () => {
  repo.storage.clear();
  repo.storage.set(111, 'Ошибка 111');
  repo.storage.set(111, 'Ошибка 111');
  expect(repo.storage.size).toBe(1);
});

test('unknown error code', () => {
  repo.storage.clear();
  repo.storage.set(111, 'Ошибка 111');
  expect(repo.translate(112)).toBe('Unknown error');
});
