import { App } from 'api/FirebaseApp';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

// Initialize Firebase

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth(App);
auth.languageCode = 'it';

export const loginWithGoogle = async () => {
  provider.setCustomParameters({
    login_hint: 'dethtrokers@gmail.com',
  });
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential) return;
    const token = credential.accessToken;
    const user = result.user;
    console.log(token);
    console.log(user);
  });
};

// auth.languageCode=""
