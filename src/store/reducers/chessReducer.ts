import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Square {
  color: 'white' | 'black' | 'yellow' | 'red';
}

interface ChessState {
  squares: Square[];
}

const initialSquares: Square[] = Array.from({ length: 64 }, (_, i) => {
  const row = Math.floor(i / 8);
  const col = i % 8;
  return { color: (row + col) % 2 === 0 ? 'white' : 'black' };
});

const initialState: ChessState = { squares: initialSquares };

const chessSlice = createSlice({
  name: 'chess',
  initialState,
  reducers: {
    selectSquare(state, action: PayloadAction<number>) {
      const idx = action.payload;
      const current = state.squares[idx].color;
      if (current === 'white') state.squares[idx].color = 'yellow';
      else if (current === 'black') state.squares[idx].color = 'red';
      else {
        // revert back to original checker color
        const row = Math.floor(idx / 8);
        const col = idx % 8;
        state.squares[idx].color = (row + col) % 2 === 0 ? 'white' : 'black';
      }
    },
    reset(state) {
      state.squares = initialSquares.slice();
    },
  },
});

export const { selectSquare, reset } = chessSlice.actions;
export default chessSlice.reducer;