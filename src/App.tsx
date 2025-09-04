import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Board from './components/Board';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Chess Game</h1>
                <Board />
            </div>
        </Provider>
    );
};

export default App;