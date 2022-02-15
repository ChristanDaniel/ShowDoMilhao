import { Reducer } from "react";

import { GAME_ACTION_TYPES, IGameActionReturn } from "./gameActions";
import { IGameState } from "./gameModel";

const INITIAL_STATE: Partial<IGameState> = {
  response: 3,
  questions: [],
  loading: true,
  err: "",
  score: 0,
  assertions: 0,
  timer: 30,
  restartTimer: false,
};

const updateGameData = (
  state: Partial<IGameState>,
  action: IGameActionReturn
) => ({
  ...state,
  response: action.payload?.response || state.response,
  questions: action.payload?.questions || state.questions,
  loading: action.payload?.loading || state.loading,
  err: action.payload?.err || state.err,
  score: action.payload?.score || state.score,
  assertions: action.payload?.assertions || state.assertions,
  timer: action.payload?.timer || state.timer,
  restartTimer: action.payload?.restartTimer || state.restartTimer,
  login: action.payload?.login || state.login
});

const game: Reducer<Partial<IGameState>, IGameActionReturn> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case GAME_ACTION_TYPES.UPDATE_GAME_DATA:
      return updateGameData(state, action);
    default:
      return state;
  }
};

export default game;
