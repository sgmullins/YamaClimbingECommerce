import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCkIt7O_Glt4Q211xbL5QwaBhqOBkO1eRY',
  authDomain: 'yama-e-commerce.firebaseapp.com',
  databaseURL: 'https://yama-e-commerce.firebaseio.com',
  projectId: 'yama-e-commerce',
  storageBucket: 'yama-e-commerce.appspot.com',
  messagingSenderId: '361637011721',
  appId: '1:361637011721:web:ad43702a87751bad4df3d8',
  measurementId: 'G-2TD2E57FQQ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //checks if user exists, returns if does and creates a new user in DB if not
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
