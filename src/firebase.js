import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCsh2LN0mLRp78wp247iIbuvUi8aqNWwQI",
  authDomain: "react-challenge-slack-clone2.firebaseapp.com",
  projectId: "react-challenge-slack-clone2",
  storageBucket: "react-challenge-slack-clone2.appspot.com",
  messagingSenderId: "734255660744",
  appId: "1:734255660744:web:a97e6617f756d2b0c26ffd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export default db;
export {auth, provider}

