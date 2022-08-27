import { db } from '../api/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const updateDataDB = async (playerName: string) => {
  const docRef = doc(db, 'results', 'results');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const currentResult = data[playerName];

    await updateDoc(docRef, {
      [playerName]: currentResult ? currentResult + 1 : 1,
    });
  } else {
    throw new Error();
  }
};
