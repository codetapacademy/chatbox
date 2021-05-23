import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/storage';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAreFj_psBPRYHQVC2SVHK5VY-2LgwU5F0",
  authDomain: "chatbox-937a8.firebaseapp.com",
  projectId: "chatbox-937a8",
  storageBucket: "chatbox-937a8.appspot.com",
  messagingSenderId: "1012062828381",
  appId: "1:1012062828381:web:1f303149c1e1628d19dab4",
  measurementId: "G-LS9RJP7DQ4"
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
// export const storage = firebase.storage()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const GitHubProvider = new firebase.auth.GithubAuthProvider()


// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'


// const firebaseConfig = {
//   apiKey: "AIzaSyAreFj_psBPRYHQVC2SVHK5VY-2LgwU5F0",
//   authDomain: "chatbox-937a8.firebaseapp.com",
//   projectId: "chatbox-937a8",
//   storageBucket: "chatbox-937a8.appspot.com",
//   messagingSenderId: "1012062828381",
//   appId: "1:1012062828381:web:1f303149c1e1628d19dab4",
//   measurementId: "G-LS9RJP7DQ4"
// };


// firebase.initializeApp(firebaseConfig)

// export const auth = firebase.auth()

// export const db = firebase.firestore()

// // export const GitHubProvider = new firebase.auth.GitHubAuthProvider()
