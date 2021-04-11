import React, { useState } from 'react';
import Board from './components/Board';
import Out from './components/Out';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const newg = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(newg);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  console.log('history', history);

  const { winner, winningsq } = calculateWinner(current.board);

  const handleclick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };
  const onnew = () => {
    setHistory(newg);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Out winner={winner} current={current} />
      <Board
        board={current.board}
        handleclick={handleclick}
        winningsq={winningsq}
      />
      <button type="button" onClick={onnew}>
        start new game
      </button>
    </div>
  );
};

export default App;
