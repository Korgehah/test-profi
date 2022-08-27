import { useEffect, useState } from 'react';
import { ResultsProps } from '../../../types';
import { getDataFromDB } from '../../../utils/getDataFromDB';
import { Loader } from '../../Loader';

const ResultsBoard = () => {
  const [results, setResults] = useState<ResultsProps[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDataFromDB(setResults).then(() => setIsLoading(false));
  }, []);

  return (
    <div className='results'>
      <div className='results__title'>Таблица лидеров</div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='results__table'>
          <div className='results__row'>
            <div className='results__cell'>Место</div>
            <div className='results__cell'>Имя</div>
            <div className='results__cell'>Число побед</div>
          </div>
          {results.map(({ name, score }, index) => (
            <div className='results__row' key={index}>
              <div className='results__cell'>{index + 1}</div>
              <div className='results__cell'>{name}</div>
              <div className='results__cell'>{score}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export { ResultsBoard };