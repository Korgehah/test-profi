import React from 'react';
import { GameStep } from '../../../types';
import { Button } from '../../Button';

interface NamesBoardProps {
  playerOne: string;
  playerTwo: string;
  setPlayerOne: React.Dispatch<React.SetStateAction<string>>;
  setPlayerTwo: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<GameStep>>;
}

const NamesBoard = ({
  playerOne,
  playerTwo,
  setPlayerOne,
  setStep,
  setPlayerTwo,
}: NamesBoardProps) => {
  return (
    <div className='names'>
      <label className='names__label'>
        {`Введите имя игрока 1 (Х)*`}
        <input
          type='text'
          name='name'
          defaultValue={playerOne}
          onChange={(event) => setPlayerOne(event.target.value)}
          className='names__input'
        />
      </label>
      <label className='names__label'>
        {`Введите имя игрока 2 (О)`}
        <input
          type='text'
          name='name'
          defaultValue={playerTwo}
          onChange={(event) => setPlayerTwo(event.target.value)}
          className='names__input'
        />
      </label>
      <span className='names__info'>*Ход начинает игрок 1</span>
      <Button onClick={() => setStep('game')}>Начать игру</Button>
    </div>
  );
};
export { NamesBoard };
