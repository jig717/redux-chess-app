import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from './Square';
import { RootState } from '../store';
import { selectSquare } from '../store/reducers/chessReducer';
import '../styles/board.css';

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const squares = useSelector((s: RootState) => s.chess.squares);

  const handleSquareClick = (index: number) => {
    dispatch(selectSquare(index));
  };

  return (
    <div className="board">
      {squares.map((sq, idx) => (
        <Square key={idx} index={idx} color={sq.color} onClick={() => handleSquareClick(idx)} />
      ))}
    </div>
  );
};

export default Board;