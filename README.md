# Redux Chess Game

This project is a simple chess game built using React and Redux. The game features an 8x8 chessboard where players can interact with the squares. Clicking on a white square changes its color to yellow, while clicking on a black square changes its color to red.

## Project Structure

```
redux-chess-app
├── public
│   └── index.html
├── src
│   ├── index.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── Board.tsx
│   │   ├── Square.tsx
│   │   └── Piece.tsx
│   ├── store
│   │   ├── index.ts
│   │   ├── actions
│   │   │   └── chessActions.ts
│   │   ├── reducers
│   │   │   └── chessReducer.ts
│   │   └── types
│   │       └── chessTypes.ts
│   ├── hooks
│   │   └── useChess.ts
│   ├── styles
│   │   └── board.css
│   └── utils
│       └── chessUtils.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/redux-chess-app.git
   ```

2. Navigate to the project directory:
   ```
   cd redux-chess-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the game in action.

## Game Rules

- The chessboard consists of 64 squares arranged in an 8x8 grid.
- Players can click on squares to change their colors:
  - White squares turn yellow when clicked.
  - Black squares turn red when clicked.
- The game does not implement full chess rules but serves as a foundation for further development.

## Technologies Used

- React
- Redux
- TypeScript
- CSS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.