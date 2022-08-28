import { Button } from '../Button';

import { GameStep } from '../../types';
import { updateDataDB } from '../../utils/updateDataDB';

interface PopupProps {
  setStep: React.Dispatch<React.SetStateAction<GameStep>>;
  setBoard: React.Dispatch<React.SetStateAction<string[]>>;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  playerOne: string;
  playerTwo: string;
  winner: string | null;
}

const Popup = ({
  setStep,
  winner,
  playerOne,
  playerTwo,
  setBoard,
  setIsPopupOpen,
}: PopupProps) => {
  const getWinnerName = () => {
    if (winner === 'x') {
      updateDataDB(playerOne);
      return `Победил ${playerOne}`;
    } else if (winner === 'o') {
      updateDataDB(playerTwo);
      return `Победил ${playerTwo}`;
    } else {
      return 'Ничья';
    }
  };

  return (
    <div className='popup'>
      <div className='popup__wrapper'>
        <span className='popup__text'>{getWinnerName()}</span>
        <div className='popup__buttons'>
          <Button
            onClick={() => {
              setStep('menu');
            }}
          >
            Вернуться к меню
          </Button>
          <Button
            onClick={() => {
              setBoard(Array(9).fill(''));
              setIsPopupOpen(false);
            }}
          >
            Сыграть еще раз
          </Button>
        </div>
      </div>
      <div className='popup__overlay' />
    </div>
  );
};
export { Popup };
