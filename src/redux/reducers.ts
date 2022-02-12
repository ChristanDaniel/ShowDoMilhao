import { combineReducers } from "redux";
import game from './game/gameReducer'
import { IGameState } from './game/gameModel'

type StoreData = {
  game: Partial<IGameState>;
};

const reducersCombined = combineReducers({
  game
});

export type { StoreData };

export { reducersCombined };
