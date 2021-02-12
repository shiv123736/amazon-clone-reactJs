import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCye6bmN_byeMxRfLFbvs9rR9ojeNVODe8",
  authDomain: "clone-4ad9a.firebaseapp.com",
  projectId: "clone-4ad9a",
  storageBucket: "clone-4ad9a.appspot.com",
  messagingSenderId: "437465057319",
  appId: "1:437465057319:web:b7fd00bda686b2091aa602",
  measurementId: "G-6D1ETY3Y5D",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
