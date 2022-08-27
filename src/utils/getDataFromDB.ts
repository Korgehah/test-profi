import { db } from '../api/firebase';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { ResultsProps } from '../types';

export const getDataFromDB = async (
  setResults: React.Dispatch<React.SetStateAction<ResultsProps[]>>
) => {
  const docRef = doc(db, 'results', 'results');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const resultsArr = [];

    for (let [key, value] of Object.entries(docSnap.data())) {
      resultsArr.push({ name: key, score: value });
    }

    setResults(resultsArr);
  } else {
    throw new Error();
  }
};
