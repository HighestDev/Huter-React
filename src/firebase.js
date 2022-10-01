import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


 const firebaseConfig = {
  apiKey: "AIzaSyAfmdic3gaJjL7N15mTmC7gMo1rRp3USns",
  authDomain: "react-hunter-975ac.firebaseapp.com",
  projectId: "react-hunter-975ac",
  storageBucket: "react-hunter-975ac.appspot.com",
  messagingSenderId: "850050065478",
  appId: "1:850050065478:web:bab977a7a28a740da05647",
  measurementId: "G-F5Y3VG9RVJ"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}