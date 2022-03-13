import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgef5UmKxGnTmsqhTIMpZFrLHBy4Fk22Y",
  authDomain: "borrowt.firebaseapp.com",
  projectId: "borrowt",
  storageBucket: "borrowt.appspot.com",
  messagingSenderId: "166600653064",
  appId: "1:166600653064:web:f20ff0bac4688a876194bd"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log("registered account");
      console.log(user);
      return true;
    })
    .catch(error => {
      // Error
      console.log(error);
      return false;
    });
};

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log("signed in");
      return true;
    })
    .catch(error => {
      // Error
      console.log(error);
      return false;
    });
};

export default firebase;