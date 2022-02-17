interface IGameState {
  response: number;
  questions: string[];
  loading: boolean;
  err: string;
  score: number;
  assertions: number;
  timer: number;
  restartTimer: boolean;
  login?: {
    name: string;
    email: string;
  }
}

interface gameState {
  game: IGameState
}

export type { IGameState, gameState };
