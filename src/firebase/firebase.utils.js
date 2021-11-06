import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAdvSHiVEMMZRDYCaXZTr-kEXUQAsVlEoQ",
  authDomain: "crwn-db-8b7aa.firebaseapp.com",
  projectId: "crwn-db-8b7aa",
  storageBucket: "crwn-db-8b7aa.appspot.com",
  messagingSenderId: "933156693515",
  appId: "1:933156693515:web:4feb76bae529892e2f890e",
  measurementId: "G-6MRG4QWDG3",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
