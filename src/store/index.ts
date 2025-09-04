import { configureStore } from '@reduxjs/toolkit';
import chessReducer from './reducers/chessReducer';

const store = configureStore({
  reducer: {
    chess: chessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
export default store;