import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { selectSquare } from '../store/reducers/chessReducer';

export const useChess = () => {
  const dispatch = useDispatch<AppDispatch>();
  const squares = useSelector((s: RootState) => s.chess.squares);

  const handleSquareClick = (index: number) => {
    dispatch(selectSquare(index));
  };

  return { squares, handleSquareClick };
};

export default useChess;