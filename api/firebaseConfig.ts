// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYNVg9p31WVrfjSa46MLiHn63NQ3gFFMg',
  authDomain: 'what-snewapp.firebaseapp.com',
  projectId: 'what-snewapp',
  storageBucket: 'what-snewapp.appspot.com',
  messagingSenderId: '723710010186',
  appId: '1:723710010186:web:a2becf34316c8fa7e917b3',
  measurementId: 'G-KF687FM43Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const addDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'ada',
      last: 'lovelace',
      born: 1815,
    });
  } catch (er) {
    console.error('Error adding document: ' + er);
  }
};

export default addDocument;
