export const SELECT_SQUARE = 'SELECT_SQUARE';
export const RESET_SQUARES = 'RESET_SQUARES';

export interface SelectSquareAction {
    type: typeof SELECT_SQUARE;
    payload: {
        squareId: string;
        color: string;
    };
}

export interface ResetSquaresAction {
    type: typeof RESET_SQUARES;
}

export type ChessActionTypes = SelectSquareAction | ResetSquaresAction;

export interface ChessState {
    selectedSquares: {
        [key: string]: string; // squareId: color
    };
}