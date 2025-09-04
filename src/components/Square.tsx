import React from 'react';

interface SquareProps {
  index: number;
  color: 'white' | 'black' | 'yellow' | 'red';
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ index, color, onClick }) => {
  const style: React.CSSProperties = {
    backgroundColor: color === 'white' ? '#fff' : color === 'black' ? '#444' : color,
    width: '60px',
    height: '60px',
  };

  return <div className="square" style={style} onClick={onClick} data-index={index} />;
};

export default Square;