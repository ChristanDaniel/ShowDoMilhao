import { useDispatch, useSelector } from "react-redux";
import { updateGameData } from "./gameActions";
import { IGameState } from "./gameModel";

const useGetGameData = (): Partial<IGameState> => {
  const gameStore = useSelector((store) => store);

  return gameStore;
};

const useUpdateGameData = (newGameData:  Partial<IGameState>) => {
    const dispatch = useDispatch()
    dispatch(updateGameData({...newGameData}))
};

export { useGetGameData, useUpdateGameData }
