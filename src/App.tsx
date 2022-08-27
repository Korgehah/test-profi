import { useState } from 'react';

import './assets/scss/index.scss';

import { GameStep } from './types';

import { MenuBoard } from './components/Boards';

const Boards = () => {
  const [step, setStep] = useState<GameStep>('menu');

  switch (step) {
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
