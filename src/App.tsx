import { useState } from 'react';

import './assets/scss/index.scss';

import { GameStep } from './types';

import {
  GameBoard,
  MenuBoard,
  NamesBoard,
  ResultsBoard,
} from './components/Boards';
import { Button } from './components/Button';

interface BoardsProps {
  step: GameStep;
  setStep: React.Dispatch<React.SetStateAction<GameStep>>;
}

const Boards = ({ step, setStep }: BoardsProps) => {
  const [playerOne, setPlayerOne] = useState<string>('Игрок 1');
  const [playerTwo, setPlayerTwo] = useState<string>('Игрок 2');

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
    case 'game':
      return (
        <GameBoard
          playerOne={playerOne}
          playerTwo={playerTwo}
          setStep={setStep}
        />
      );
    case 'results':
      return <ResultsBoard />;
    default:
      return <MenuBoard setStep={setStep} />;
  }
};

const App = () => {
  const [step, setStep] = useState<GameStep>('menu');
  return (
    <div className='tic-tac-toe'>
      <h1 className='tic-tac-toe__title'>Крестики-нолики</h1>
      <div className='tic-tac-toe__board'>
        <Boards step={step} setStep={setStep} />
      </div>
      {step !== 'menu' && (
        <Button onClick={() => setStep('menu')}>Вернуться в меню</Button>
      )}
    </div>
  );
};

export default App;
