import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbnzhS9CPVOSLwGhnH7Owgi4amFYpFGzk",
  authDomain: "slack-clone-a9dc3.firebaseapp.com",
  projectId: "slack-clone-a9dc3",
  storageBucket: "slack-clone-a9dc3.appspot.com",
  messagingSenderId: "567992016156",
  appId: "1:567992016156:web:65e9f336791c3bd2ec6ed9",
  measurementId: "G-DGEYDJRMWS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
