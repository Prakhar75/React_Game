import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isnext, next] = useState(false);

  const winner = calculateWinner(board);
  console.log(winner);

  const mess = winner
    ? `winner is ${winner}`
    : `next player is ${isnext ? 'X' : 'O'}`;

  const handleclick = pos => {
    if (board[pos] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, posi) => {
        if (posi == pos) {
          return isnext ? 'X' : 'O';
        }
        return square;
      });
    });
    next(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{mess}</h2>
      <Board board={board} handleclick={handleclick} />
    </div>
  );
};

export default App;
