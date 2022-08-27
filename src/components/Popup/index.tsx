import { Button } from '../Button';

import { GameStep } from '../../types';
import { updateDataDB } from '../../utils/updateDataDB';

interface PopupProps {
  setStep: React.Dispatch<React.SetStateAction<GameStep>>;
  playerOne: string;
  playerTwo: string;
  winner: string | null;
}

const Popup = ({ setStep, winner, playerOne, playerTwo }: PopupProps) => {
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
        <Button
          onClick={() => {
            setStep('menu');
          }}
        >
          Вернуться к меню
        </Button>
      </div>
      <div className='popup__overlay' />
    </div>
  );
};
export { Popup };
