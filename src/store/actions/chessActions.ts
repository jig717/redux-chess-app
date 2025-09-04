export const SELECT_SQUARE = 'SELECT_SQUARE';

export const selectSquare = (squareId: string) => {
    return {
        type: SELECT_SQUARE,
        payload: squareId,
    };
};