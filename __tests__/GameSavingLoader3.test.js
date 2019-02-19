import GameSavingLoader from '../src/js/GameSavingLoader';
import GameSavingData from '../src/js/GameSavingData';

jest.setTimeout(10000);

jest.mock('../src/js/GameSavingData');

test('mocking rejection of GameSavingData.json()', async () => {
  GameSavingData.mockImplementation(() => (
    { json: () => Promise.reject('ERROR') }
  ));

  expect.assertions(1);

  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual(new Error('JSON_ERROR'));
  }
});
