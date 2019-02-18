import GameSavingLoader from '../src/js/GameSavingLoader';
import readGameSaving from '../src/js/readGameSaving';

jest.setTimeout(10000);

jest.mock('../src/js/readGameSaving');

test('mocking rejection of readGameSaving()', () => {
  readGameSaving.mockRejectedValue('ERROR');

  return expect(GameSavingLoader.load()).rejects.toThrow('LOAD_ERROR');
});
