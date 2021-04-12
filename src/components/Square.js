import React from 'react';

const Square = ({ value, onClick, iswin }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      // className={`square${iswin ? 'winning' : ''} ${
      //   value === 'X' ? 'text-green' : 'text-orange'
      // }`}
      style={{ fontWeight: iswin ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
