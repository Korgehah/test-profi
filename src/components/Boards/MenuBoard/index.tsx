import { Button } from '../../Button';

import { GameStep } from '../../../types';
import React from 'react';

interface MenuBoardProps {
  setStep: React.Dispatch<React.SetStateAction<GameStep>>;
}

const MenuBoard = ({ setStep }: MenuBoardProps) => {
  return (
    <div className='menu'>
      <Button onClick={() => setStep('names')}>Начать игру</Button>
      <Button onClick={() => setStep('results')}>Таблица результатов</Button>
    </div>
  );
};
export { MenuBoard };
