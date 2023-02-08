import { App } from 'api/FirebaseApp';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
  getDoc,
  doc,
  DocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  User,
} from 'firebase/auth';

// Initialize Firebase
type typesOfResponse =
  | 'Usuario creado exitosamente'
  | 'Sesion iniciada correctamente'
  | 'Lo sentimos algo ha salido mal';
interface Response {
  state: typesOfResponse;
  payload?: User | DocumentData;
}
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth(App);
auth.languageCode = 'it';

export const loginWithGoogle = async (): Promise<Response> => {
  provider.setCustomParameters({
    login_hint: 'dethtrokers@gmail.com',
  });
  const response = await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return;
      const token = credential.accessToken;
      const user = result.user;

      return { user: user, token: token };
    })
    .catch((e) => {
      console.log(e);
    });
  if (!response?.token || !response?.user) {
    return { state: 'Lo sentimos algo ha salido mal' };
  }
  const { user, token } = response;
  const db = getFirestore(App);
  const usersRef = collection(db, 'users');
  const queryUserEmail = query(usersRef, where('email', '==', user.email));
  const queryResponse = await getDocs(queryUserEmail);

  if (!queryResponse.docChanges().length) {
    try {
      const res = await addDoc(collection(db, 'users'), {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        contacts: [],
        chats: [],
      });

      const userRef = doc(db, 'users', res.id);
      const response = await getDoc(userRef);
      const userLogged = response.data();

      return { state: 'Usuario creado exitosamente', payload: userLogged };
    } catch (err) {}
  }
  let userLogged;
  queryResponse.forEach((doc) => {
    if (doc.data()) {
      userLogged = doc.data();
    }
  });
  return { state: 'Sesion iniciada correctamente', payload: userLogged };
};

// auth.languageCode=""
