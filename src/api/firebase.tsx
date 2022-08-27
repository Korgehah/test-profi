import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBi8jfnw-FYgvmzdHJQi3IBgS532vS5oHU',
  authDomain: 'tic-tac-toe-edc4d.firebaseapp.com',
  projectId: 'tic-tac-toe-edc4d',
  storageBucket: 'tic-tac-toe-edc4d.appspot.com',
  messagingSenderId: '933718280665',
  appId: '1:933718280665:web:77b1ccfab61e03d5d9b1c8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
