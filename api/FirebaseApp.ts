import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCYNVg9p31WVrfjSa46MLiHn63NQ3gFFMg',
  authDomain: 'what-snewapp.firebaseapp.com',
  projectId: 'what-snewapp',
  storageBucket: 'what-snewapp.appspot.com',
  messagingSenderId: '723710010186',
  appId: '1:723710010186:web:a2becf34316c8fa7e917b3',
  measurementId: 'G-KF687FM43Y',
};
export const App = initializeApp(firebaseConfig);
