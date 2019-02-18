import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  static async load() {
    let data;
    try {
      data = await readGameSaving();
    } catch (error) {
      throw new Error(`LOAD_${error}`);
    }

    try {
      const gameSavingData = new GameSavingData(data);
      return await gameSavingData.json();
    } catch (error) {
      throw new Error(`JSON_${error}`);
    }
  }
}
