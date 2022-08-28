import { useEffect, useState } from 'react';
import { Popup } from '../../Popup';
import { Button } from '../../Button';

import { GameStep } from '../../../types';

import { getWinner } from '../../../utils/getWinner';

interface GameBoardProps {
  playerOne: string;
  playerTwo: string;
  setStep: React.Dispatch<React.SetStateAction<GameStep>>;
}

const GameBoard = ({ playerOne, playerTwo, setStep }: GameBoardProps) => {
  const [turnIsX, setTurnIsX] = useState<boolean>(true);
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [lastCell, setLastCell] = useState<number>(NaN);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const winner = getWinner(board);

  useEffect(() => {
    if (winner) {
      setIsPopupOpen(true);
      setTurnIsX(!turnIsX);
    }
    if (!winner && !board.includes('')) {
      setIsPopupOpen(true);
    }
  }, [winner]);

  const onClickCell = (cell: number) => {
    const copiedBoard = [...board];
    if (winner || copiedBoard[cell]) return null;
    copiedBoard[cell] = turnIsX ? 'x' : 'o';
    setBoard(copiedBoard);
    setTurnIsX(!turnIsX);
    setLastCell(cell);
  };

  const cancellTurn = (): void => {
    if (lastCell + 1) {
      const copiedBoard = [...board];
      copiedBoard[lastCell] = '';
      setBoard(copiedBoard);
      setTurnIsX(!turnIsX);
      setLastCell(NaN);
    }
  };

  return (
    <div className='game'>
      <span className='game__player'>
        {!winner ? `Ходит ${turnIsX ? playerOne : playerTwo}` : 'Игра окончена'}
      </span>
      <div className='game__field'>
        {board.map((cell, index) => (
          <div
            className='game__cell'
            onClick={() => onClickCell(index)}
            key={index}
          >
            {cell}
          </div>
        ))}
      </div>
      <Button onClick={cancellTurn} disabled={!(lastCell + 1) ? true : false}>
        Отменить ход
      </Button>
      {isPopupOpen && (
        <Popup
          setStep={setStep}
          playerOne={playerOne}
          playerTwo={playerTwo}
          winner={winner}
          setBoard={setBoard}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
    </div>
  );
};
export { GameBoard };
