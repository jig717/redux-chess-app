import React from 'react';

interface PieceProps {
    type: string;
    position: string;
}

const Piece: React.FC<PieceProps> = ({ type, position }) => {
    return (
        <div className={`piece ${type}`} style={{ position: 'absolute', top: position }}>
            {type}
        </div>
    );
};

export default Piece;