import { IGameState } from "./gameModel";

enum GAME_ACTION_TYPES {
  UPDATE_GAME_DATA = "client/UPDATE_GAME_DATA",
}

interface IGameActionReturn {
  payload?: Partial<IGameState>;
  type: GAME_ACTION_TYPES;
}

const updateGameData = (payload: Partial<IGameState>): IGameActionReturn => ({
  type: GAME_ACTION_TYPES.UPDATE_GAME_DATA,
  payload,
});

export type { IGameActionReturn };

export { updateGameData, GAME_ACTION_TYPES };
