import React from 'react';
import Square from './Square';

const Board = ({ board, handleclick, winningsq }) => {
  const renderclick = pos => {
    const iswin = winningsq.includes(pos);
    return (
      <Square
        value={board[pos]}
        onClick={() => handleclick(pos)}
        iswin={iswin}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderclick(0)}
        {renderclick(1)}
        {renderclick(2)}
      </div>

      <div className="board-row">
        {renderclick(3)}
        {renderclick(4)}
        {renderclick(5)}
      </div>

      <div className="board-row">
        {renderclick(6)}
        {renderclick(7)}
        {renderclick(8)}
      </div>
    </div>
  );
};

export default Board;
