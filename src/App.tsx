import { useState } from 'react';

import './assets/scss/index.scss';

import { GameStep } from './types';

import { MenuBoard, NamesBoard } from './components/Boards';

const Boards = () => {
  const [playerOne, setPlayerOne] = useState<string>('Игрок 1');
  const [playerTwo, setPlayerTwo] = useState<string>('Игрок 2');
  const [step, setStep] = useState<GameStep>('menu');

  switch (step) {
    case 'names':
      return (
        <NamesBoard
          playerOne={playerOne}
          playerTwo={playerTwo}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          setStep={setStep}
        />
      );
    default:
      return <MenuBoard setStep={setStep} />;
  }
};

const App = () => {
  return (
    <div className='tic-tac-toe'>
      <h1 className='tic-tac-toe__title'>Крестики-нолики</h1>
      <Boards />
    </div>
  );
};

export default App;
