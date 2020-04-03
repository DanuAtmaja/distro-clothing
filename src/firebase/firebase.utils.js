import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAQqPpxBunm0jef_sGWEEOWcY8wrXsr-Jk",
  authDomain: "distros-db.firebaseapp.com",
  databaseURL: "https://distros-db.firebaseio.com",
  projectId: "distros-db",
  storageBucket: "distros-db.appspot.com",
  messagingSenderId: "708671368127",
  appId: "1:708671368127:web:a07d8983b5f4a7ace7cf0a",
  measurementId: "G-Z685X5G725"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;