import GameSavingLoader from '../src/js/GameSavingLoader';
import GameSavingData from '../src/js/GameSavingData';

jest.setTimeout(10000);

jest.mock('../src/js/GameSavingData');

test('mocking rejection of GameSavingData.json()', () => {
  GameSavingData.mockImplementation(() => (
    { json: () => Promise.reject('ERROR') }
  ));

  return expect(GameSavingLoader.load()).rejects.toThrow('JSON_ERROR');
});
