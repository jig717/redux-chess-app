export const isValidMove = (from: string, to: string, board: string[][]): boolean => {
    // Implement logic to determine if a move is valid based on chess rules
    return true; // Placeholder return value
};

export const getSquareColor = (row: number, col: number): string => {
    return (row + col) % 2 === 0 ? 'white' : 'black';
};

export const getInitialBoard = (): string[][] => {
    const board = Array(8).fill(null).map(() => Array(8).fill(null));
    // Initialize pieces on the board
    return board;
};