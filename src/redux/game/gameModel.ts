interface IGameState {
  response: number;
  questions: string[];
  loading: boolean;
  err: string;
  score: number;
  assertions: number;
  timer: number;
  restartTimer: boolean;
}

export type { IGameState };
